function toLatin1(s) {
    print(isLatin1(s), true);
    return s;
}
function testDollarReplacement() {
    
    var s = toLatin1("Foobarbaz123");
    var pat = toLatin1("bar");
    print(s.replace(pat, toLatin1("AA")), "FooAAbaz123");
    print(s.replace(pat, toLatin1("A$$A")), "FooA$Abaz123");
    print(s.replace(pat, toLatin1("A$`A")), "FooAFooAbaz123");
    print(s.replace(pat, toLatin1("A$&A")), "FooAbarAbaz123");
    print(s.replace(pat, toLatin1("A$'A")), "FooAbaz123Abaz123");
    print(isLatin1(s.replace(pat, "A$'A")), true);

    
    print(s.replace(pat, "A\u1200"), "FooA\u1200baz123");
    print(s.replace(pat, "A$$\u1200"), "FooA$\u1200baz123");
    print(s.replace(pat, "A$`\u1200"), "FooAFoo\u1200baz123");
    print(s.replace(pat, "A$&\u1200"), "FooAbar\u1200baz123");
    print(s.replace(pat, "A$'\u1200"), "FooAbaz123\u1200baz123");

    
    s = "Foobarbaz123\u1200";
    print(s.replace(pat, toLatin1("A")), "FooAbaz123\u1200");
    print(s.replace(pat, toLatin1("A$$")), "FooA$baz123\u1200");
    print(s.replace(pat, toLatin1("A$`")), "FooAFoobaz123\u1200");
    print(s.replace(pat, toLatin1("A$&")), "FooAbarbaz123\u1200");
    print(s.replace(pat, toLatin1("A$'")), "FooAbaz123\u1200baz123\u1200");

    
    s = "Foobar\u1200baz123";
    pat += "\u1200";
    print(s.replace(pat, toLatin1("AB")), "FooABbaz123");
    print(s.replace(pat, toLatin1("A$$B")), "FooA$Bbaz123");
    print(s.replace(pat, toLatin1("A$`B")), "FooAFooBbaz123");
    print(s.replace(pat, toLatin1("A$&B")), "FooAbar\u1200Bbaz123");
    print(s.replace(pat, toLatin1("A$'B")), "FooAbaz123Bbaz123");

    
    print(s.replace(pat, "A\u1300"), "FooA\u1300baz123");
    print(s.replace(pat, "A$$\u1300"), "FooA$\u1300baz123");
    print(s.replace(pat, "A$`\u1300"), "FooAFoo\u1300baz123");
    print(s.replace(pat, "A$&\u1300"), "FooAbar\u1200\u1300baz123");
    print(s.replace(pat, "A$'\u1300"), "FooAbaz123\u1300baz123");
}
testDollarReplacement();

function testRegExp() {
    var s = toLatin1("Foobar123bar234");
    var res = s.replace(/bar\d\d/, "456");
    print(res, "Foo4563bar234");
    print(isLatin1(res), true);

    
    var re1 = /bar\d\d/;
    res = s.replace(re1, toLatin1("789"));
    print(res, "Foo7893bar234");
    print(isLatin1(res), true);

    var re2 = /bar\d\d/g;
    res = s.replace(re2, toLatin1("789\u00ff"));
    print(res, "Foo789\u00ff3789\u00ff4");
    print(isLatin1(res), true);

    
    print(s.replace(re1, "789\u1200"), "Foo789\u12003bar234");
    print(s.replace(re2, "789\u1200"), "Foo789\u12003789\u12004");

    
    s += "\u1200";
    print(s.replace(re1, toLatin1("7890")), "Foo78903bar234\u1200");
    print(s.replace(re2, toLatin1("7890\u00ff")), "Foo7890\u00ff37890\u00ff4\u1200");

    
    print(s.replace(re1, "789\u1200"), "Foo789\u12003bar234\u1200");
    print(s.replace(re2, "789\u1200"), "Foo789\u12003789\u12004\u1200");
}
testRegExp();

function testRegExpDollar() {
    var s = toLatin1("Foobar123bar2345");

    
    var re1 = /bar\d\d/;
    var re2 = /bar(\d\d)/g;
    print(s.replace(re1, toLatin1("--$&--")), "Foo--bar12--3bar2345");
    print(s.replace(re2, toLatin1("--$'\u00ff--")), "Foo--3bar2345\xFF--3--45\xFF--45");
    print(s.replace(re2, toLatin1("--$`--")), "Foo--Foo--3--Foobar123--45");
    print(isLatin1(s.replace(re2, toLatin1("--$`--"))), true);

    
    print(s.replace(re1, "\u1200$$"), "Foo\u1200$3bar2345");
    print(s.replace(re2, "\u1200$1"), "Foo\u1200123\u12002345");
    print(s.replace(re2, "\u1200$'"), "Foo\u12003bar23453\u12004545");

    
    s += "\u1200";
    print(s.replace(re1, toLatin1("**$&**")), "Foo**bar12**3bar2345\u1200");
    print(s.replace(re2, toLatin1("**$1**")), "Foo**12**3**23**45\u1200");
    print(s.replace(re2, toLatin1("**$`**")), "Foo**Foo**3**Foobar123**45\u1200");
    print(s.replace(re2, toLatin1("**$'$$**")), "Foo**3bar2345\u1200$**3**45\u1200$**45\u1200");

    
    print(s.replace(re1, "**$&**\ueeee"), "Foo**bar12**\ueeee3bar2345\u1200");
    print(s.replace(re2, "**$1**\ueeee"), "Foo**12**\ueeee3**23**\ueeee45\u1200");
    print(s.replace(re2, "\ueeee**$`**"), "Foo\ueeee**Foo**3\ueeee**Foobar123**45\u1200");
    print(s.replace(re2, "\ueeee**$'$$**"), "Foo\ueeee**3bar2345\u1200$**3\ueeee**45\u1200$**45\u1200");
}
testRegExpDollar();

function testFlattenPattern() {
    var s = "abcdef[g]abc";

    
    var res = s.replace(toLatin1("def[g]"), "--$&--", "gi");
    print(res, "abc--def[g]--abc");
    print(isLatin1(res), true);

    
    s = "abcdef[g]\u1200abc";
    print(s.replace("def[g]\u1200", "++$&++", "gi"), "abc++def[g]\u1200++abc");
}
testFlattenPattern();

function testReplaceEmpty() {
    
    var s = toLatin1("--abcdefghijkl--abcdefghijkl--abcdefghijkl--abcdefghijkl");
    var res = s.replace(/abcd[eE]/g, "");
    print(res, "--fghijkl--fghijkl--fghijkl--fghijkl");
    print(isLatin1(res), true);

    s = "--abcdEf--";
    res = s.replace(/abcd[eE]/g, "");
    print(res, "--f--");
    print(isLatin1(res), true);

    
    s = "--abcdefghijkl--abcdefghijkl--abcdefghijkl--abcdefghijkl\u1200";
    print(s.replace(/abcd[eE]/g, ""), "--fghijkl--fghijkl--fghijkl--fghijkl\u1200");

    s = "--abcdEf--\u1200";
    print(s.replace(/abcd[eE]/g, ""), "--f--\u1200");
}
testReplaceEmpty();
