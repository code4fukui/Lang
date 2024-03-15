# Lang, a esm for i18n

## Format

lang.csv
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

lang.json → lang.csv
```sh
deno run -A json2csv lang.json
```
