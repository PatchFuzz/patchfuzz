function testInitialEnvironment(source, expected) {
    let module = parseModule(source);
    let names = getModuleEnvironmentNames(module);
    print(names.length, expected.length);
    expected.forEach(function(name) {
        print(names.includes(name), true);
    });
}



testInitialEnvironment('', []);
testInitialEnvironment('var x = 1;', []);
testInitialEnvironment('let x = 1;', []);
testInitialEnvironment("if (true) { let x = 1; }", []);
testInitialEnvironment("if (true) { var x = 1; }", []);
testInitialEnvironment('function x() {}', ['x']);
testInitialEnvironment("class x { constructor() {} }", []);


testInitialEnvironment('export var x = 1;', ['x']);
testInitialEnvironment('export let x = 1;', ['x']);
testInitialEnvironment('export default function x() {};', ['x']);
testInitialEnvironment('export default 1;', ['default']);
testInitialEnvironment('export default function() {};', ['default']);
testInitialEnvironment("export class x { constructor() {} }", ['x']);
testInitialEnvironment('export default class x { constructor() {} };', ['x']);
testInitialEnvironment('export default class { constructor() {} };', ['default']);


testInitialEnvironment('import { x } from "m";', []);
testInitialEnvironment('import * as x from "m";', ['x']);
