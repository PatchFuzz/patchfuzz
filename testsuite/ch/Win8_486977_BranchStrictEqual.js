





(function () {
  var a = [[1,2,3],[4,5,6]];
  var b = [[1,2,3],[4,5,6]];

  var testName = "a.length === b.length";
  if (a.length === b.length) WScript.Echo(testName, ": True"); else WScript.Echo(testName, ": False");

  var testName = "a.length !== b.length";
  if (a.length !== b.length) WScript.Echo(testName, ": True"); else WScript.Echo(testName, ": False");
})();
