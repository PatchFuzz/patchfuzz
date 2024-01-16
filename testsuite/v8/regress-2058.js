
































"Now is the".replace(/Now (\w+) the/g, function() {
  "foo bar".match(/( )/);
  assertEquals(RegExp.$1, " ");
})
