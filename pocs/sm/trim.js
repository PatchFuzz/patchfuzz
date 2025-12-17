function test() {
    
    var s = "  \r\t\n\u00A0foo 123\t \r\n\u00A0";
    print(isLatin1(s), true);

    var res = s.trim();
    print(isLatin1(res), true);
    print(res, "foo 123");

    res = s.trimLeft();
    print(isLatin1(res), true);
    print(res, "foo 123\t \r\n\u00A0");

    res = s.trimRight();
    print(isLatin1(res), true);
    print(res, "  \r\t\n\u00A0foo 123");

    res = "foo 1234".trim();
    print(isLatin1(res), true);
    print(res, "foo 1234");

    
    s = "  \r\t\n\u00A0\u2000foo\u1200123\t \r\n\u00A0\u2009";
    print(s.trim(), "foo\u1200123");
    print(s.trimLeft(), "foo\u1200123\t \r\n\u00A0\u2009");
    print(s.trimRight(), "  \r\t\n\u00A0\u2000foo\u1200123");
}
test();
