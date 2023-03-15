













var r;


r = new RegExp ("()");
print(r.exec ("a") == ",");

r = new RegExp ("(a)");
print(r.exec ("a") == "a,a");

r = new RegExp ("((a)b)c");
print(r.exec ("abc") == "abc,ab,a");

r = new RegExp ("(a)*");
print(r.exec ("b")[0] == "");
print(r.exec ("b")[1] == undefined);
print(r.exec ("aaaa") == "aaaa,a");

r = new RegExp ("(a)+");
print(r.exec ("aaaa") == "aaaa,a");

r = new RegExp ("(a){4}");
print(r.exec ("aaaa") == "aaaa,a");

r = new RegExp ("(a){1,2}");
print(r.exec ("a") == "a,a");
print(r.exec ("aa") == "aa,a");
print(r.exec ("aaaa") == "aa,a");

r = new RegExp ("(a)?");
print(r.exec ("a") == "a,a");
print(r.exec ("b")[0] == "");
print(r.exec ("b")[1] == undefined);


r = new RegExp ("(a){1,3}a");
print(r.exec("aa") == "aa,a");

r = new RegExp ("(a){1,3}a");
print(r.exec("aaa") == "aaa,a");

r = new RegExp ("(a){1,3}");
print(r.exec("a") == "a,a");

r = new RegExp ("(a){1,3}");
print(r.exec("aaa") == "aaa,a");

r = new RegExp ("(a){1,3}");
print(r.exec("aaaa") == "aaa,a");

r = new RegExp ("(a){1,5}");
print(r.exec("aaaa") == "aaaa,a");

r = new RegExp ("(a|b){1,2}");
print(r.exec("a") == "a,a");

r = new RegExp ("(a|b){1,3}a");
print(r.exec("aaa") == "aaa,a");

r = new RegExp ("(a|b){1,3}a");
print(r.exec("aba") == "aba,b");

r = new RegExp ("(a|b){1,3}a");
print(r.exec("b") == undefined);

r = new RegExp ("(a|b){1,3}a");
print(r.exec("bbb") == undefined);

r = new RegExp ("(a|b){1,3}");
print(r.exec("a") == "a,a");

r = new RegExp ("(a|b){1,3}");
print(r.exec("aa") == "aa,a");

r = new RegExp ("(a|b){1,3}");
print(r.exec("aaa") == "aaa,a");

r = new RegExp ("(a|b){1,3}");
print(r.exec("ab") == "ab,b");

r = new RegExp ("(a|b){1,3}");
print(r.exec("aba") == "aba,a");

r = new RegExp ("(a|b){1,3}");
print(r.exec("bab") == "bab,b");

r = new RegExp ("(a|b){1,3}");
print(r.exec("bbb") == "bbb,b");

r = new RegExp ("(a|b){1,4}a");
print(r.exec("bbb") == undefined);

r = new RegExp ("(a|b){1,4}");
print(r.exec("ab") == "ab,b");

r = new RegExp ("(a|b){1,4}");
print(r.exec("aba") == "aba,a");

r = new RegExp ("(a|b){1,4}");
print(r.exec("bbb") == "bbb,b");

r = new RegExp ("(a|b){1,5}");
print(r.exec("aba") == "aba,a");

r = new RegExp ("(a|b){1,5}");
print(r.exec("abab") == "abab,b");

r = new RegExp ("(a|b){1,5}");
print(r.exec("bbb") == "bbb,b");

r = new RegExp ("(aba)*");
print(r.exec("aaaa") == ",");

r = new RegExp ("(aba)+");
print(r.exec("aaaa") == undefined);

r = new RegExp ("(a|bb|c|d)");
print(r.exec("a") == "a,a");

r = new RegExp ("(a|b)");
print(r.exec("a") == "a,a");

r = new RegExp ("(a|b)+");
print(r.exec("aba") == "aba,a");

r = new RegExp ("(a|b)");
print(r.exec("b") == "b,b");

r = new RegExp ("(a)");
print(r.exec("a") == "a,a");

r = new RegExp ("(a)*");
print(r.exec("a") == "a,a");

r = new RegExp ("(a)*");
print(r.exec("aaaa") == "aaaa,a");

r = new RegExp ("(a)+");
print(r.exec("aaaa") == "aaaa,a");

r = new RegExp ("(a|aa){0,3}b");
print(r.exec("aaaaaab") == "aaaaaab,aa");

r = new RegExp ("((a){2,3}){4}b");
print(r.exec("aaaaaaaab") == "aaaaaaaab,aa,a");


r = new RegExp ("(a)+?");
print(r.exec("aaaa") == "a,a");

r = new RegExp ("(a)*?aa");
print(r.exec("aaaa") == "aa,");

r = new RegExp ("(aaa|aa)*?aa");
print(r.exec("aaaa")[0] == "aa");
print(r.exec("aaaa")[1] == undefined);

r = new RegExp ("(a)??aa");
print(r.exec("aaaa")[0] == "aa");
print(r.exec("aaaa")[1] == undefined);

r = new RegExp ("(a)?aa");
print(r.exec("aaaa") == "aaa,a");

r = new RegExp ("(()*?)*?a");
print(r.exec("ba")[0] == "a");
print(r.exec("ba")[1] == undefined);
print(r.exec("ba")[2] == undefined);

r = new RegExp ("((bb?)*)*a");
print(r.exec("bbba") == "bbba,bbb,b");

r = new RegExp ("((bb?)*)*bbb\\Ba");
print(r.exec("bbba")[0] == "bbba");
print(r.exec("bbba")[1] == undefined);
print(r.exec("bbba")[2] == undefined);

r = new RegExp ("(a??){0,1}a");
print(r.exec("aa") == "aa,a");

r = new RegExp ("(a?){0,1}a");
print(r.exec("aa") == "aa,a");

r = new RegExp ("(a{0,1}?){0,1}a");
print(r.exec("aa") == "aa,a");

r = new RegExp ("(|.)+");
print(JSON.stringify (r.exec("asdfgh")) === '["asdfgh","h"]');

print(JSON.stringify (/([^\W](){8,}?){5}/.exec("asdfghijk")) === '["asdfg","g",""]');
print(JSON.stringify (/(()+?(.+)|){3,}./u.exec("asdfghi")) === '["asdfghi","",null,null]')
print(JSON.stringify (/(()+?(.+)|){3,}?./u.exec("asdfghi")) === '["asdfghi","",null,null]')
print(JSON.stringify (/(?:()+?(.+)|){3,}./u.exec("asdfghi")) === '["asdfghi",null,null]')
print(JSON.stringify (/(?:()+?(.+)|){3,}?./u.exec("asdfghi")) === '["asdfghi",null,null]')
