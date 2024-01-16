




var x = 'outside';
var result;

(function() {
  var eval = WScript.LoadScript("", "samethread").eval;

  eval('var x = "inside";');

  result = x;
}());
print("passed");