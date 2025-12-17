function testModuleEnvironment(module, expected) {
    var actual = getModuleEnvironmentNames(module).sort();
    print(actual.length, expected.length);
    for (var i = 0; i < actual.length; i++) {
        print(actual[i], expected[i]);
    }
}


let m = parseModule("");
moduleLink(m);
testModuleEnvironment(m, []);

let a = registerModule('a', parseModule("var x = 1; export { x };"));
let b = registerModule('b', parseModule("import { x as y } from 'a';"));

moduleLink(a);
moduleLink(b);

testModuleEnvironment(a, ['x']);
testModuleEnvironment(b, ['y']);


let c = parseModule(`function a(x) { return x; }
                     function b(x) { return x + 1; }
                     function c(x) { return x + 2; }
                     function d(x) { return x + 3; }`);
const names = ['a', 'b', 'c', 'd'];
testModuleEnvironment(c, names);
names.forEach((n) => print(typeof getModuleEnvironmentValue(c, n), "undefined"));
moduleLink(c);
for (let i = 0; i < names.length; i++) {
    let f = getModuleEnvironmentValue(c, names[i]);
    print(f(21), 21 + i);
}
