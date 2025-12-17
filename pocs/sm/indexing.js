function testCharCodeAt() {
    var s = "abcdefghijklm1234567891000";
    for (var i=0; i<10; i++)
	print(s.charCodeAt(i), 97 + i);

    var rope = s + "blah";
    print(rope.charCodeAt(s.length + 3), 104);

    rope = s + "Foo987";
    print(rope.charCodeAt(s.length + 4), 56);

    rope = "twoByte\u0580" + s;
    print(rope.charCodeAt(7), 0x580);
    print(rope.charCodeAt(14), 103);
}
testCharCodeAt();

function testCharAt() {
    var s = "abcdefghijklm100000002345";
    print(s.charAt(0), "a");
    print(s.charAt(s.length-1), "5");
    print(s.charAt(s.length), "");

    var rope = s + "abcZYX";
    print(rope.charAt(s.length + 3), "Z");

    rope = s + "Foo987";
    print(rope.charAt(s.length + 4), "8");

    rope = "twoByte\u0580" + s;
    print(rope.charAt(7), "\u0580");
    print(rope.charAt(14), "g");
}
testCharAt();

function testIndex(s) {
    print(s[0], "a");
    print(s[s.length-1], "6");

    rope = "twoByte\u0512" + s
    print(rope[7], "\u0512");
}

var s = "abcdefghijklm123456";
testIndex(s);
testIndex(s);
testIndex(s);
