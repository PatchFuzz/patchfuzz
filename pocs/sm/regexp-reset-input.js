var re = /(pattern)/g;
var input = "patternpatternpattern";
re.exec(input)
RegExp.input = "satturn";
print(RegExp.$1, "pattern");
print(RegExp.lastMatch, "pattern");
print(RegExp.lastParen, "pattern");
print(RegExp.rightContext, "patternpattern");
