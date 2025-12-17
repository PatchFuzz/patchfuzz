function toLatin1(s) {
    print(isLatin1(s), true);
    return s;
}
function testSearchFlat() {
    var s1 = toLatin1("fooBar12345");
    var s2 = toLatin1("Bar1");

    
    print(s1.search(s2), 3);
    print(s2.search(s1), -1);
    print(s1.search(s1), 0);

    
    print(s1.search(s2 + "\u1200"), -1);
    print(s1.search(("12345\u1200").slice(0, -1)), 6);

    
    print("fooBar12345\u1200".search(s1), 0);
    print("fooBar12345\u1200".search(s2), 3);

    
    print("fooBar12345\u1200".search("5\u1200"), 10);
    print("fooBar12345\u1200".search("5\u1201"), -1);
}
testSearchFlat();

function testSearchRope() {
    
    var s1 = "foobarbaz0123456789".repeat(10);
    s1.indexOf("333"); 
    s1 = toLatin1(s1);

    var ropeMixed = s1 + "abcdef\u1200";
    print(isLatin1(ropeMixed), false);

    var abc = toLatin1("abc");
    var baz = toLatin1("baz");

    
    print(ropeMixed.search(abc), 190);
    print(ropeMixed.search(baz), 6);

    
    print(ropeMixed.search("def\u1200"), 193);

    
    s1 = "foobarbaz0123456789".repeat(10);
    s1.indexOf("333"); 
    s1 = toLatin1(s1);
    var ropeLatin1 = s1 + toLatin1("abcdef\u00AA");
    print(isLatin1(ropeLatin1), true);
    print(ropeLatin1.search(abc), 190);

    
    print(ropeLatin1.search("\u1200bc".substr(1)), 191);

    
    s1 = "foobarbaz0123456789\u11AA".repeat(10);
    var ropeTwoByte = s1 + "abcdef\u1200";
    print(ropeTwoByte.search(abc), 200);

    
    print(ropeTwoByte.search("def\u1200"), 203);
}
testSearchRope();

function testSearchStringMatch() {
    var re = /bar/;

    
    print(toLatin1("foobar1234").search(re), 3);
    print(toLatin1("foo1234").search(re), -1);

    
    print("\u1200bar".search(re), 1);
    print("\u12001234".search(re), -1);
}
testSearchStringMatch();
