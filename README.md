# Lang

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

An ESM for i18n.

## Format
The translation data is stored in a CSV file, with the following format:

```
key,en,ja,zh-TW
clear,Clear,クリア,白
```

## Usage

```js
import { Lang } from "https://code4fukui.github.io/Lang/Lang.js";

const lang = await Lang.create("./lang.csv");
console.log(lang.get("clear"));
console.log(lang.get("clear", "ja"));
```

## json2csv

You can convert a `lang.json` file to `lang.csv` using the following command:

```sh
deno run -A json2csv lang.json
```

## License
MIT License — see [LICENSE](LICENSE).