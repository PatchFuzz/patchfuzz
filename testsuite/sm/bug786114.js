let expected = 'o!o!o!';
let actual = '';




let o = {
  g: function() { actual += this.toString(); },
  toString: function() { return "o!"; }
}



with (o) {
  (function() { g(); })();
}




with (o) {
  eval("(function() { g(); })()");
}




with (o) {
  eval("(function() { (function() { g(); })(); })()");
}

assertEq(actual, expected);
