


























function testSideEffects(subject, re) {
  var counter = 0;
  var side_effect_object = { valueOf: function() { return counter++; } };
  re.lastIndex = side_effect_object;
  re.exec(subject);

  assertEquals(1, counter);

  re.lastIndex = side_effect_object;
  re.test(subject);

  assertEquals(2, counter);
}

testSideEffects("zzzz", /a/);
testSideEffects("zzzz", /a/g);
testSideEffects("xaxa", /a/);
testSideEffects("xaxa", /a/g);
