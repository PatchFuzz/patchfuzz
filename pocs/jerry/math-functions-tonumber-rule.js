var str = "";
var a = {valueOf: function() { str += "a"; return 1;}};
var b = {valueOf: function() { str += "b"; return NaN;}};
var c = {valueOf: function() { str += "c"; return 2;}};

Math.min (a, b, c);
assert (str === "abc");

str = "";
Math.max (a, b, c);
assert (str === "abc");

str = "";
Math.pow(b,a);
assert (str === "ba");

str = "";
Math.atan2(b,a);
assert (str === "ba");
