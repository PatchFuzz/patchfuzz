"use strict";

;
;

function parseAndEvaluate(source) {
    let m = parseModule(source);
    moduleLink(m);
    return moduleEvaluate(m);
}

function testHasNames(names, expected) {
    print(names.length, expected.length);
    expected.forEach(function(name) {
        print(names.includes(name), true);
    });
}

function testEqualArrays(actual, expected) {
	print(Array.isArray(actual), true);
	print(Array.isArray(expected), true);
    print(actual.length, expected.length);
    for (let i = 0; i < expected.length; i++) {
    	print(actual[i], expected[i]);
    }
}

let a = registerModule('a', parseModule(
    `
     export var b = 2;
     export var a = 1;`
));

let b = registerModule('b', parseModule(
    `import * as ns from 'a';
     export { ns };
     export var x = ns.a + ns.b;`
));

moduleLink(b);
moduleEvaluate(b);
testHasNames(getModuleEnvironmentNames(b), ["ns", "x"]);
let ns = getModuleEnvironmentValue(b, "ns");
testHasNames(Object.keys(ns), ["a", "b"]);
print(ns.a, 1);
print(ns.b, 2);
print(ns.c, undefined);
print(getModuleEnvironmentValue(b, "x"), 3);


print(Object.getPrototypeOf(ns), null);
print(Reflect.setPrototypeOf(ns, null), true);
print(Reflect.setPrototypeOf(ns, Object.prototype), false);
print(() => Object.setPrototypeOf(ns, {}), TypeError);
print(function() { ns.foo = 1; }, TypeError);
print(Object.isExtensible(ns), false);
Object.preventExtensions(ns);
let desc = Object.getOwnPropertyDescriptor(ns, "a");
print(desc.value, 1);
print(desc.writable, true);
print(desc.enumerable, true);
print(desc.configurable, false);
print(typeof desc.get, "undefined");
print(typeof desc.set, "undefined");
print(function() { ns.a = 1; }, TypeError);
delete ns.foo;
print(function() { delete ns.a; }, TypeError);


desc = Object.getOwnPropertyDescriptor(ns, Symbol.toStringTag);
print(desc.value, "Module");
print(desc.writable, false);
print(desc.enumerable, false);
print(desc.configurable, false);
print(typeof desc.get, "undefined");
print(typeof desc.set, "undefined");
print(Object.prototype.toString.call(ns), "[object Module]");


testEqualArrays(Reflect.ownKeys(ns), ["a", "b", Symbol.toStringTag]);
testEqualArrays(Object.getOwnPropertyNames(ns), ["a", "b"]);
testEqualArrays(Object.getOwnPropertySymbols(ns), [Symbol.toStringTag]);


let c = registerModule('c',
    parseModule("export let c = 1; import * as ns from 'd'; let d = ns.d;"));
let d = registerModule('d',
    parseModule("export let d = 2; import * as ns from 'c'; let c = ns.c;"));
moduleLink(c);
moduleLink(d);
moduleEvaluate(c)
  .then(r => {
    
    print(false, true)
  })
  .catch(e => {
   print(e instanceof ReferenceError, true)
  });


let e = registerModule('e',
    parseModule("export let e = 1; import * as ns from 'f'; export function f() { return ns.f }"));
let f = registerModule('f',
    parseModule("export let f = 2; import * as ns from 'e'; export function e() { return ns.e }"));
moduleLink(e);
moduleLink(f);
moduleEvaluate(e);
moduleEvaluate(f);
print(e.namespace.f(), 2);
print(f.namespace.e(), 1);
drainJobQueue();
