let fooJs = registerModule("foo", parseModule('export const test = true; export const test2 = 2;'));


let fooJson = registerModule("foo", parseModule('{"test": true}', "", "json"));

let a = registerModule("a", parseModule(`import {test} from "foo"; import json from "foo" with { type: "json" };`));
moduleLink(a);
moduleEvaluate(a);

let json = getModuleEnvironmentValue(a, 'json');
print(json.test, true);

let test = getModuleEnvironmentValue(a, 'test');
print(test, true);

let expectedModules = [fooJs, fooJson];
print(a.requestedModules.length, expectedModules.length);
