var previous = RegExp.lastMatch;
'hello world'.anchor('"hi"');
print(previous, RegExp.lastMatch);
