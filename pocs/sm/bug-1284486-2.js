let b = registerModule('b', parseModule("export var b = 3; export var c = 4;"));
let c = registerModule('c', parseModule("export * from 'a'; export * from 'b';"));

let e1;
let threw = false;
try {
    moduleLink(c);
} catch (exc) {
    threw = true;
    e1 = exc;
}
print(threw, true);
print(typeof e1 === "undefined", false);

threw = false;
let e2;
try {
    moduleLink(c);
} catch (exc) {
    threw = true;
    e2 = exc;
}
print(threw, true);
print(e1.toString(), e2.toString());
