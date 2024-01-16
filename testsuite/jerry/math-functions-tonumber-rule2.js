













var str = "";
var a = {valueOf: function() { str += "a"; return 1;}};
var b = {valueOf: function() { str += "b"; return NaN;}};
var c = {valueOf: function() { str += "c"; return 2;}};
var d = {valueOf: function() { str += "d"; return Infinity;}};
var e = {valueOf: function() { str += "e"; return 3;}};

Math.hypot (a, b, c, d, e);
assert (str === "abcde");
