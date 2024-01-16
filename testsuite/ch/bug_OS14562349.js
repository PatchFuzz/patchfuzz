




WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "Dynamic import can be used as part of an op-equiv expression",
    body: function () {
        var failed = false;
        try {
          function foo() { };
          foo(import('ModuleSimpleExport.js')*=2);
        } catch(e) { 
          failed = true;
        }
        assert.isTrue(failed, "Failed as expected.")
    }
  },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
