





let badregexp =  "(?:" +  " ".repeat(32768*2)+  ")*";
reg = RegExp(badregexp);
assertThrows(() => reg.test(), SyntaxError);
