const count = 1024;

let a = registerModule('a', parseModule("export let a = 1;"));

let s = "";
for (let i = 0; i < count; i++) {
    s += "import * as ns" + i + " from 'a';\n";
    s += "print(ns" + i + ".a, 1);\n";
}
let b = registerModule('b', parseModule(s));

moduleLink(b);
moduleEvaluate(b);
