































var num_captures = 1000;
var regexp_string = "(a)";
for (var i = 0; i < num_captures - 1; i++) {
  regexp_string += "|(b)";
}
var regexp = new RegExp(regexp_string);

for (var i = 0; i < 10; i++) {
  var matches = regexp.exec("a");
  var count = 0;
  matches.forEach(function() { count++; });
  assertEquals(num_captures + 1, count);
}
