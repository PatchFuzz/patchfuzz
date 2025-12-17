let badregexp =  "(?:" +  " ".repeat(32768*2)+  ")*";
reg = RegExp(badregexp);
print(() => reg.test(), SyntaxError);
