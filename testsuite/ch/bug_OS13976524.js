




WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "Lambda with a string constant on the following line shouldn't AV",
    body: function () {
jtmchw => z
'123'
    }
  },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
