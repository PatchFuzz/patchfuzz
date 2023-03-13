













var r;

r = new RegExp ("a");
print(r.exec ("a") == "a");
print(r.exec ("b") == undefined);

r = new RegExp ("abc");
print(r.exec ("abc") == "abc");

r = new RegExp ("a*");
print(r.exec ("aaa") == "aaa");
print(r.exec ("b") == "");

r = new RegExp ("a+");
print(r.exec ("aaa") == "aaa");
print(r.exec ("b") == undefined);

r = new RegExp ("ab*");
print(r.exec ("a") == "a");
print(r.exec ("ab") == "ab");
print(r.exec ("abbbb") == "abbbb");
print(r.exec ("bbb") == undefined);

r = new RegExp ("a?");
print(r.exec ("a") == "a");
print(r.exec ("b") == "");

r = new RegExp ("a{4}");
print(r.exec ("aaa") == undefined);
print(r.exec ("aaaaa") == "aaaa");
print(r.exec ("aaaa") == "aaaa");

r = new RegExp ("a{2,6}");
print(r.exec ("a") == undefined);
print(r.exec ("aa") == "aa");
print(r.exec ("aaaaaa") == "aaaaaa");
print(r.exec ("aaaaaaa") == "aaaaaa");

r = new RegExp (".*");
print(r.exec ("abcdefghijkl") == "abcdefghijkl");

r = /\n/;
print(r.exec ("\n") == "\n");

print(/[\12]+/.exec ("1\n\n\n\n\n2") == "\n\n\n\n\n");
print(/[\1284]+/.exec ("1\n\n8\n4\n\n2") == "\n\n8\n4\n\n");
print(/[\89]12/.exec ("1\9128123") == "912");
print(/[\11]/.exec ("1\n\n\t\n\n2") == "\t");
print(/[\142][\143][\144]/.exec ("abcde") == "bcd");

print(/\12+/.exec ("1\n\n\n\n\n2") == "\n\n\n\n\n");
print(/\11/.exec ("1\n\n\t\n\n2") == "\t");
print(/\142\143\144/.exec ("abcde") == "bcd");
print(/\942\143\144/.exec ("a942cde") == "942cd");
print(/\14234/.exec ("b34") == "b34");

print(/(\d+)\2([abc]+)\1\2/.exec("123abc123abc") == "123abc123abc,123,abc");
print(/([abc]+)\40([d-f]+)\12\1/.exec("abc def\nabc") == "abc def\nabc,abc,def");

var expected = "8765432911,8,7,6,5,4,3,2,9,1";
print(/(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)\9(\d)\9/.exec("8765432911") == expected);

r = /\c/;
print(r.exec ("\\c") == "\\c");

r = /[\c]/;
print(r.exec ("c") == "c");

r = /[\c1]/;
print(r.exec ("\u0011") == "\u0011");

r = /\c3/;
print(r.exec ("\\c3") == "\\c3");

r = /\cIasd/;
print(r.exec ("\tasd") == "\tasd");

r = /.??$/;
print(JSON.stringify (r.exec("asd")) === '["d"]');
