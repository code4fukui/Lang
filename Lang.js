import { CSV } from "https://code4fukui.github.io/CSV/CSV.js";

export class Lang {
  static async create(fn = "lang.csv") {
    if (fn.endsWith(".csv")) {
      const data = await CSV.fetchJSON(fn);
      const langset = {};
      for (const d of data) {
        const key = d.key;
        for (const lang in d) {
          if (lang == "key") continue;
          if (!langset[lang]) {
            langset[lang] = {};
          }
          langset[lang][key] = d[lang];
        }
      }
      return new Lang(langset);
    } else if (fn.endsWith(".json")) {
      if (globalThis["Deno"]) {
        const langset = JSON.parse(await Deno.readTextFile(fn));
        return new Lang(langset);
      } else {
        const langset = await (await fetch(fn)).json();
        return new Lang(langset);
      }
    }
    throw new Error("not supported format");
  }
  constructor(langset) {
    this.langset = langset;
  }
  get(key, lang) {
    if (!lang) lang = navigator.language;
    const lang1 = this.langset[lang];
    if (lang1 && lang1[key]) {
      return lang1[key];
    }
    const slang2 = lang.substring(0, lang.indexOf("_"));
    if (slang2 != lang) {
      const lang2 = this.langset[slang2];
      if (lang2 && lang2[key]) {
        return lang2[key];
      }
    }
    return this.langset["en"][key];
  }
}
