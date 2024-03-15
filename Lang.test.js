import * as t from "https://deno.land/std/testing/asserts.ts";
import { Lang } from "./Lang.js";

Deno.test("simple", async () => {
  const lang = await Lang.create("./lang.csv");
  t.assertEquals(lang.get("clear"), "Clear");
  t.assertEquals(lang.get("clear", "en"), "Clear");
  t.assertEquals(lang.get("clear", "ja"), "クリア");
  t.assertEquals(lang.get("clear", "fr"), "Clear"); // default
});
Deno.test("key doesn't exist", async () => {
  const lang = await Lang.create("./lang.csv");
  t.assertEquals(lang.get("clear2"), undefined);
  t.assertEquals(lang.get("clear2", "en"), undefined);
  t.assertEquals(lang.get("clear2", "ja"), undefined);
  t.assertEquals(lang.get("clear2", "fr"), undefined); // default
});
Deno.test("json", async () => {
  const lang = await Lang.create("./lang.json");
  t.assertEquals(lang.get("clear"), "Clear");
  t.assertEquals(lang.get("clear", "en"), "Clear");
  t.assertEquals(lang.get("clear", "ja"), "クリア");
  t.assertEquals(lang.get("clear", "fr"), "Clear"); // default
});
