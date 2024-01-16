










WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Generated tests",
        body: function () {

            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('class X { constructor(){super();} }'); }, "generated test #1");
            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('class X { constructor(){super.x;} }'); }, "generated test #2");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('class X { x(){super();} }'); }, SyntaxError, "generatedTest #3", "Invalid use of the 'super' keyword: generatedTest #3");
            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('class X { x(){super.x;} }'); }, "generated test #4");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('function x(){super();}'); }, SyntaxError, "generatedTest #5", "Invalid use of the 'super' keyword");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('function x(){super.x;}'); }, SyntaxError, "generatedTest #6", "Invalid use of the 'super' keyword");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('() => {super();}'); }, SyntaxError, "generatedTest #7", "Invalid use of the 'super' keyword");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('() => {super.x;}'); }, SyntaxError, "generatedTest #8", "Invalid use of the 'super' keyword");
            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('class X { constructor(){class X { constructor(){super();} }} }'); }, "generated test #9");
            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('class X { constructor(){class X { constructor(){super.x;} }} }'); }, "generated test #10");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('class X { constructor(){class X { x(){super();} }} }'); }, SyntaxError, "generatedTest #11", "Invalid use of the 'super' keyword");
            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('class X { constructor(){class X { x(){super.x;} }} }'); }, "generated test #12");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('class X { constructor(){function x(){super();}} }'); }, SyntaxError, "generatedTest #13", "Invalid use of the 'super' keyword");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('class X { constructor(){function x(){super.x;}} }'); }, SyntaxError, "generatedTest #14", "Invalid use of the 'super' keyword");
            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('class X { constructor(){() => {super();}} }'); }, "generated test #15");
            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('class X { constructor(){() => {super.x;}} }'); }, "generated test #16");
            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('class X { x(){class X { constructor(){super();} }} }'); }, "generated test #17");
            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('class X { x(){class X { constructor(){super.x;} }} }'); }, "generated test #18");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('class X { x(){class X { x(){super();} }} }'); }, SyntaxError, "generatedTest #19", "Invalid use of the 'super' keyword");
            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('class X { x(){class X { x(){super.x;} }} }'); }, "generated test #20");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('class X { x(){function x(){super();}} }'); }, SyntaxError, "generatedTest #21", "Invalid use of the 'super' keyword");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('class X { x(){function x(){super.x;}} }'); }, SyntaxError, "generatedTest #22", "Invalid use of the 'super' keyword");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('class X { x(){() => {super();}} }'); }, SyntaxError, "generatedTest #23", "Invalid use of the 'super' keyword");
            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('class X { x(){() => {super.x;}} }'); }, "generated test #24");
            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('function x(){class X { constructor(){super();} }}'); }, "generated test #25");
            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('function x(){class X { constructor(){super.x;} }}'); }, "generated test #26");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('function x(){class X { x(){super();} }}'); }, SyntaxError, "generatedTest #27", "Invalid use of the 'super' keyword");
            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('function x(){class X { x(){super.x;} }}'); }, "generated test #28");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('function x(){function x(){super();}}'); }, SyntaxError, "generatedTest #29", "Invalid use of the 'super' keyword");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('function x(){function x(){super.x;}}'); }, SyntaxError, "generatedTest #30", "Invalid use of the 'super' keyword");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('function x(){() => {super();}}'); }, SyntaxError, "generatedTest #31", "Invalid use of the 'super' keyword");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('function x(){() => {super.x;}}'); }, SyntaxError, "generatedTest #32", "Invalid use of the 'super' keyword");
            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('() => {class X { constructor(){super();} }}'); }, "generated test #33");
            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('() => {class X { constructor(){super.x;} }}'); }, "generated test #34");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('() => {class X { x(){super();} }}'); }, SyntaxError, "generatedTest #35", "Invalid use of the 'super' keyword");
            assert.doesNotThrow(function () { WScript.LoadScript("","samethread").WScript.LoadScript('() => {class X { x(){super.x;} }}'); }, "generated test #36");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('() => {function x(){super();}}'); }, SyntaxError, "generatedTest #37", "Invalid use of the 'super' keyword");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('() => {function x(){super.x;}}'); }, SyntaxError, "generatedTest #38", "Invalid use of the 'super' keyword");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('() => {() => {super();}}'); }, SyntaxError, "generatedTest #39", "Invalid use of the 'super' keyword");
            assert.throws(() => { WScript.LoadScript("","samethread").WScript.LoadScript('() => {() => {super.x;}}'); }, SyntaxError, "generatedTest #40", "Invalid use of the 'super' keyword");
        }
    }
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
