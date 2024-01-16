













var r;


r = new RegExp ("()");
assert (r.exec ("a") == ",");

r = new RegExp ("(a)");
assert (r.exec ("a") == "a,a");

r = new RegExp ("((a)b)c");
assert (r.exec ("abc") == "abc,ab,a");

r = new RegExp ("(a)*");
assert (r.exec ("b")[0] == "");
assert (r.exec ("b")[1] == undefined);
assert (r.exec ("aaaa") == "aaaa,a");

r = new RegExp ("(a)+");
assert (r.exec ("aaaa") == "aaaa,a");

r = new RegExp ("(a){4}");
assert (r.exec ("aaaa") == "aaaa,a");

r = new RegExp ("(a){1,2}");
assert (r.exec ("a") == "a,a");
assert (r.exec ("aa") == "aa,a");
assert (r.exec ("aaaa") == "aa,a");

r = new RegExp ("(a)?");
assert (r.exec ("a") == "a,a");
assert (r.exec ("b")[0] == "");
assert (r.exec ("b")[1] == undefined);


r = new RegExp ("(a){1,3}a");
assert (r.exec("aa") == "aa,a");

r = new RegExp ("(a){1,3}a");
assert (r.exec("aaa") == "aaa,a");

r = new RegExp ("(a){1,3}");
assert (r.exec("a") == "a,a");

r = new RegExp ("(a){1,3}");
assert (r.exec("aaa") == "aaa,a");

r = new RegExp ("(a){1,3}");
assert (r.exec("aaaa") == "aaa,a");

r = new RegExp ("(a){1,5}");
assert (r.exec("aaaa") == "aaaa,a");

r = new RegExp ("(a|b){1,2}");
assert (r.exec("a") == "a,a");

r = new RegExp ("(a|b){1,3}a");
assert (r.exec("aaa") == "aaa,a");

r = new RegExp ("(a|b){1,3}a");
assert (r.exec("aba") == "aba,b");

r = new RegExp ("(a|b){1,3}a");
assert (r.exec("b") == undefined);

r = new RegExp ("(a|b){1,3}a");
assert (r.exec("bbb") == undefined);

r = new RegExp ("(a|b){1,3}");
assert (r.exec("a") == "a,a");

r = new RegExp ("(a|b){1,3}");
assert (r.exec("aa") == "aa,a");

r = new RegExp ("(a|b){1,3}");
assert (r.exec("aaa") == "aaa,a");

r = new RegExp ("(a|b){1,3}");
assert (r.exec("ab") == "ab,b");

r = new RegExp ("(a|b){1,3}");
assert (r.exec("aba") == "aba,a");

r = new RegExp ("(a|b){1,3}");
assert (r.exec("bab") == "bab,b");

r = new RegExp ("(a|b){1,3}");
assert (r.exec("bbb") == "bbb,b");

r = new RegExp ("(a|b){1,4}a");
assert (r.exec("bbb") == undefined);

r = new RegExp ("(a|b){1,4}");
assert (r.exec("ab") == "ab,b");

r = new RegExp ("(a|b){1,4}");
assert (r.exec("aba") == "aba,a");

r = new RegExp ("(a|b){1,4}");
assert (r.exec("bbb") == "bbb,b");

r = new RegExp ("(a|b){1,5}");
assert (r.exec("aba") == "aba,a");

r = new RegExp ("(a|b){1,5}");
assert (r.exec("abab") == "abab,b");

r = new RegExp ("(a|b){1,5}");
assert (r.exec("bbb") == "bbb,b");

r = new RegExp ("(aba)*");
assert (r.exec("aaaa") == ",");

r = new RegExp ("(aba)+");
assert (r.exec("aaaa") == undefined);

r = new RegExp ("(a|bb|c|d)");
assert (r.exec("a") == "a,a");

r = new RegExp ("(a|b)");
assert (r.exec("a") == "a,a");

r = new RegExp ("(a|b)+");
assert (r.exec("aba") == "aba,a");

r = new RegExp ("(a|b)");
assert (r.exec("b") == "b,b");

r = new RegExp ("(a)");
assert (r.exec("a") == "a,a");

r = new RegExp ("(a)*");
assert (r.exec("a") == "a,a");

r = new RegExp ("(a)*");
assert (r.exec("aaaa") == "aaaa,a");

r = new RegExp ("(a)+");
assert (r.exec("aaaa") == "aaaa,a");

r = new RegExp ("(a|aa){0,3}b");
assert (r.exec("aaaaaab") == "aaaaaab,aa");

r = new RegExp ("((a){2,3}){4}b");
assert (r.exec("aaaaaaaab") == "aaaaaaaab,aa,a");


r = new RegExp ("(a)+?");
assert (r.exec("aaaa") == "a,a");

r = new RegExp ("(a)*?aa");
assert (r.exec("aaaa") == "aa,");

r = new RegExp ("(aaa|aa)*?aa");
assert (r.exec("aaaa")[0] == "aa");
assert (r.exec("aaaa")[1] == undefined);

r = new RegExp ("(a)??aa");
assert (r.exec("aaaa")[0] == "aa");
assert (r.exec("aaaa")[1] == undefined);

r = new RegExp ("(a)?aa");
assert (r.exec("aaaa") == "aaa,a");

r = new RegExp ("(()*?)*?a");
assert (r.exec("ba")[0] == "a");
assert (r.exec("ba")[1] == undefined);
assert (r.exec("ba")[2] == undefined);

r = new RegExp ("((bb?)*)*a");
assert (r.exec("bbba") == "bbba,bbb,b");

r = new RegExp ("((bb?)*)*bbb\\Ba");
assert (r.exec("bbba")[0] == "bbba");
assert (r.exec("bbba")[1] == undefined);
assert (r.exec("bbba")[2] == undefined);

r = new RegExp ("(a??){0,1}a");
assert (r.exec("aa") == "aa,a");

r = new RegExp ("(a?){0,1}a");
assert (r.exec("aa") == "aa,a");

r = new RegExp ("(a{0,1}?){0,1}a");
assert (r.exec("aa") == "aa,a");

r = new RegExp ("(|.)+");
assert (JSON.stringify (r.exec("asdfgh")) === '["asdfgh","h"]');

assert (JSON.stringify (/([^\W](){8,}?){5}/.exec("asdfghijk")) === '["asdfg","g",""]');
assert (JSON.stringify (/(()+?(.+)|){3,}./u.exec("asdfghi")) === '["asdfghi","",null,null]')
assert (JSON.stringify (/(()+?(.+)|){3,}?./u.exec("asdfghi")) === '["asdfghi","",null,null]')
assert (JSON.stringify (/(?:()+?(.+)|){3,}./u.exec("asdfghi")) === '["asdfghi",null,null]')
assert (JSON.stringify (/(?:()+?(.+)|){3,}?./u.exec("asdfghi")) === '["asdfghi",null,null]')
