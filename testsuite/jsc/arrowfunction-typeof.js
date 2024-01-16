var testCase = function (actual, expected, message) {
  if (actual !== expected) {
    throw message + ". Expected '" + expected + "', but was '" + actual + "'";
  }
};

var af1 = () => {};
var af2 = (a) => {a + 1};

noInline(af1);
noInline(af2);

for (var i = 0; i < 10000; ++i) {
  testCase(typeof af1, "function", "Error: Not correct type of the arrow function #1");
  testCase(typeof af2, "function", "Error: Not correct type of the arrow function #2");











}
