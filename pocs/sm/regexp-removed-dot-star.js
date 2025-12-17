function first(input) {
    var re = /.*b(cd)/;
    for (var i = 0; i < 10; i++)
	re.test(input);
}

first("1234\nabcdefg\n1234");
print(RegExp.lastMatch, "abcd");
print(RegExp.$1, "cd");
print(RegExp.input, "1234\nabcdefg\n1234");
print(RegExp.leftContext, "1234\n");
print(RegExp.rightContext, "efg\n1234");
print(RegExp.lastParen, "cd");





function second(input) {
    var re = /bcd.*/;
    for (var i = 0; i < 10; i++)
	re.test(input);
}

second("1234\nabcdefg\n1234");
print(RegExp.lastMatch, "bcdefg");
print(RegExp.$1, "");
print(RegExp.input, "1234\nabcdefg\n1234");
print(RegExp.leftContext, "1234\na");
print(RegExp.rightContext, "\n1234");
print(RegExp.lastParen, "");

function third(input) {
    var re = /.*bcd.*/;
    for (var i = 0; i < 10; i++)
	re.test(input);
}

third("1234\nabcdefg\n1234");
print(RegExp.lastMatch, "abcdefg");
print(RegExp.$1, "");
print(RegExp.input, "1234\nabcdefg\n1234");
print(RegExp.leftContext, "1234\n");
print(RegExp.rightContext, "\n1234");
print(RegExp.lastParen, "");
