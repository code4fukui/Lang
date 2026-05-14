# Lang

i18n用のESMです。

## フォーマット
翻訳データは以下のフォーマットでCSVファイルに保存されます:

```
key,en,ja,zh-TW
clear,Clear,クリア,白
```

## 使い方

```js
import { Lang } from "https://code4fukui.github.io/Lang/Lang.js";

const lang = await Lang.create("./lang.csv");
console.log(lang.get("clear"));
console.log(lang.get("clear", "ja"));
```

## json2csv

以下のコマンドを使用して、`lang.json`ファイルを`lang.csv`に変換できます:

```sh
deno run -A json2csv lang.json
```

## ライセンス
MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
