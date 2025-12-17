print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "Lambda with a string constant on the following line shouldn't AV",
    body: function () {
jtmchw => z
'123'
    }
  },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
