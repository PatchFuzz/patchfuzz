function toLatin1(s) {
    assertEq(isLatin1(s), true);
    return s;
}


var re = new RegExp(toLatin1("foo[bB]a\\r"), toLatin1("im"));
assertEq(isLatin1(re.source), true);
assertEq(re.source, "foo[bB]a\\r");
assertEq(re.multiline, true);
assertEq(re.ignoreCase, true);
assertEq(re.sticky, false);


re = new RegExp("foo[bB]a\\r\u1200", "im");
assertEq(isLatin1(re.source), false);
assertEq(re.source, "foo[bB]a\\r\u1200");
assertEq(re.multiline, true);
assertEq(re.ignoreCase, true);
assertEq(re.sticky, false);

re = /b[aA]r/;


assertEq(toLatin1("foobAr1234").search(re), 3);
assertEq(toLatin1("bar1234").search(re), 0);
assertEq(toLatin1("foobbr1234").search(re), -1);


assertEq("foobAr1234\u1200".search(re), 3);
assertEq("bar1234\u1200".search(re), 0);
assertEq("foobbr1234\u1200".search(re), -1);

re = /abcdefghijklm[0-5]/;
assertEq(toLatin1("1abcdefghijklm4").search(re), 1);
assertEq("\u12001abcdefghijklm0".search(re), 2);
assertEq(toLatin1("1abcdefghijklm8").search(re), -1);
assertEq("\u12001abcdefghijklm8".search(re), -1);



var s = toLatin1("foobar\xff5baz");
assertEq(s.search(/bar\u0178\d/i), 3);


''.match(eval("/(:[aaaaa\cC]\u1200)(?:\S|(?=(\3)))+?/y"));
assertEq(Function("return /(\uB0DA()})/.toString();")(), "/(\uB0DA()})/");
