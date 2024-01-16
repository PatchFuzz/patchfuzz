



var previous = RegExp.lastMatch;
'hello world'.anchor('"hi"');
assertEquals(previous, RegExp.lastMatch);
