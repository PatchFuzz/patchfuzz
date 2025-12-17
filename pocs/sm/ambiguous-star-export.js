"use strict";

;

function checkModuleEval(source) {
    let m = parseModule(source);
    moduleLink(m);
    moduleEvaluate(m);
    return m;
}

function checkModuleSyntaxError(source) {
    let m = parseModule(source);
    print(() => moduleLink(m), SyntaxError);
}

let a = registerModule('a', parseModule("export var a = 1; export var b = 2;"));
let b = registerModule('b', parseModule("export var b = 3; export var c = 4;"));
let c = registerModule('c', parseModule("export * from 'a'; export * from 'b';"));
moduleLink(c);
moduleEvaluate(c);


let d = checkModuleEval("import { a } from 'c';");
print(getModuleEnvironmentValue(d, "a"), 1);
checkModuleEval("export { a } from 'c';");


checkModuleSyntaxError("import { b } from 'c';");
checkModuleSyntaxError("export { b } from 'c';");


let m = parseModule("import * as ns from 'c';");
moduleLink(m);
moduleEvaluate(m);
let ns = c.namespace;
let names = Object.keys(ns);
print(names.length, 2);
print('a' in ns, true);
print('b' in ns, false);
print('c' in ns, true);
