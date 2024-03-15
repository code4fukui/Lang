import { CSV } from "https://code4fukui.github.io/CSV/CSV.js";

const jsonfn = Deno.args[0] || "lang.json";
const csvfn = jsonfn.substring(0, jsonfn.lastIndexOf(".")) + ".csv";

const data = JSON.parse(await Deno.readTextFile(jsonfn));

const langset = {};
for (const lang in data) {
  const set = data[lang];
  for (const key in set) {
    const value = set[key];
    if (!langset[key]) {
      langset[key] = { key };
    }
    langset[key][lang] = value;
  }
}
const data2 = Object.values(langset);
await Deno.writeTextFile(csvfn, CSV.stringify(data2));
