




WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "OS4497597: ScopeInfo::FromScope() should increment scope symbol count to accomodate 'new.target'",
        body: function () {
            (function (){
                function f() {}
                eval("");
                () =>new.target;
            })();
            
            
            
        }
    },
    {
        name: "OS5427497: Parser mistakes 'new.target' as in global function under -forceundodefer",
        body: function () {
            new.target;  
        }
    },
    {
        name: "OS8806229: eval in default parameter of arrow function",
        body: function() {
            assert.doesNotThrow(()=>(function() { (a = eval(undefined)) => {}; }));
        }
    },
    {
        name: "[MSRC35208] parameter type confusion in eval",
        body: function ()
        {
            var proxy = new Proxy(eval, {});
            assert.areEqual(0, proxy("Math.sin(0)"));
        }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
