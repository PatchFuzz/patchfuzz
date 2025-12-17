(function () {
  var a = [[1,2,3],[4,5,6]];
  var b = [[1,2,3],[4,5,6]];

  var testName = "a.length === b.length";
  if (a.length === b.length) print(testName, ": True"); else print(testName, ": False");

  var testName = "a.length !== b.length";
  if (a.length !== b.length) print(testName, ": True"); else print(testName, ": False");
})();
