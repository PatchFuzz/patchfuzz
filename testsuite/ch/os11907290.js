



var glob = this;

function testthis() {
    "use strict";
    function foo() {
        var globaObject = glob;
        var indirectEval = eval;
        indirectEval('function bar() { return "blah blah"; }');
        var desc = Object.getOwnPropertyDescriptor(globaObject, 'bar');
        if(!desc.configurable) {
            print("Failed - function should be configurable");
        }
        delete globaObject['bar'];
    }
    foo();
}
testthis();
console.log("Pass");
