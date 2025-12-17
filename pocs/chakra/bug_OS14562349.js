print("..\\UnitTestFramework\\UnitTestFramework.js");

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
        print(failed, "Failed as expected.")
    }
  },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
