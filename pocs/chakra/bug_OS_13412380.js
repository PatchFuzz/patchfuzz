var x = 'outside';
var result;

(function() {
  var eval = print("", "samethread").eval;

  eval('var x = "inside";');

  result = x;
}());
print("passed");