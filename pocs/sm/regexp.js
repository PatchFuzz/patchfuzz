function toLatin1(s) {
    print(isLatin1(s), true);
    return s;
}


var re = new RegExp(toLatin1("foo[bB]a\\r"), toLatin1("im"));
print(isLatin1(re.source), true);
print(re.source, "foo[bB]a\\r");
print(re.multiline, true);
print(re.ignoreCase, true);
print(re.sticky, false);


re = new RegExp("foo[bB]a\\r\u1200", "im");
print(isLatin1(re.source), false);
print(re.source, "foo[bB]a\\r\u1200");
print(re.multiline, true);
print(re.ignoreCase, true);
print(re.sticky, false);

re = /b[aA]r/;


print(toLatin1("foobAr1234").search(re), 3);
print(toLatin1("bar1234").search(re), 0);
print(toLatin1("foobbr1234").search(re), -1);


print("foobAr1234\u1200".search(re), 3);
print("bar1234\u1200".search(re), 0);
print("foobbr1234\u1200".search(re), -1);

re = /abcdefghijklm[0-5]/;
print(toLatin1("1abcdefghijklm4").search(re), 1);
print("\u12001abcdefghijklm0".search(re), 2);
print(toLatin1("1abcdefghijklm8").search(re), -1);
print("\u12001abcdefghijklm8".search(re), -1);



var s = toLatin1("foobar\xff5baz");
print(s.search(/bar\u0178\d/i), 3);


''.match(eval("/(:[aaaaa\cC]\u1200)(?:\S|(?=(\3)))+?/y"));
print(Function("return /(\uB0DA()})/.toString();")(), "/(\uB0DA()})/");
