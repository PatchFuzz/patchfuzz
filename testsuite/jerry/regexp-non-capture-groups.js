













var r;


r = new RegExp ("(?:)");
assert (r.exec ("a") == "");

r = new RegExp ("(?:a)");
assert (r.exec ("a") == "a");

r = new RegExp ("(?:(?:a)b)c");
assert (r.exec ("abc") == "abc");

r = new RegExp ("(?:a)*");
assert (r.exec ("b") == "");
assert (r.exec ("aaaa") == "aaaa");

r = new RegExp ("(?:a)+");
assert (r.exec ("aaaa") == "aaaa");

r = new RegExp ("(?:a){4}");
assert (r.exec ("aaaa") == "aaaa");

r = new RegExp ("(?:a){1,2}");
assert (r.exec ("a") == "a");
assert (r.exec ("aa") == "aa");
assert (r.exec ("aaaa") == "aa");

r = new RegExp ("(?:a)?");
assert (r.exec ("a") == "a");
assert (r.exec ("b") == "");


r = new RegExp ("(?:a){1,3}a");
assert (r.exec ("aa") == "aa");

r = new RegExp ("(?:a){1,3}a");
assert (r.exec ("aaa") == "aaa");

r = new RegExp ("(?:a){1,3}");
assert (r.exec ("a") == "a");

r = new RegExp ("(?:a){1,3}");
assert (r.exec ("aaa") == "aaa");

r = new RegExp ("(?:a){1,3}");
assert (r.exec ("aaaa") == "aaa");

r = new RegExp ("(?:a){1,5}");
assert (r.exec ("aaaa") == "aaaa");

r = new RegExp ("(?:a|b){1,2}");
assert (r.exec ("a") == "a");

r = new RegExp ("(?:a|b){1,3}a");
assert (r.exec ("aaa") == "aaa");

r = new RegExp ("(?:a|b){1,3}a");
assert (r.exec ("aba") == "aba");

r = new RegExp ("(?:a|b){1,3}a");
assert (r.exec ("b") == undefined);

r = new RegExp ("(?:a|b){1,3}a");
assert (r.exec ("bbb") == undefined);

r = new RegExp ("(?:a|b){1,3}");
assert (r.exec ("a") == "a");

r = new RegExp ("(?:a|b){1,3}");
assert (r.exec ("aa") == "aa");

r = new RegExp ("(?:a|b){1,3}");
assert (r.exec ("aaa") == "aaa");

r = new RegExp ("(?:a|b){1,3}");
assert (r.exec ("ab") == "ab");

r = new RegExp ("(?:a|b){1,3}");
assert (r.exec ("aba") == "aba");

r = new RegExp ("(?:a|b){1,3}");
assert (r.exec ("bab") == "bab");

r = new RegExp ("(?:a|b){1,3}");
assert (r.exec ("bbb") == "bbb");

r = new RegExp ("(?:a|b){1,4}a");
assert (r.exec ("bbb") == undefined);

r = new RegExp ("(?:a|b){1,4}");
assert (r.exec ("ab") == "ab");

r = new RegExp ("(?:a|b){1,4}");
assert (r.exec ("aba") == "aba");

r = new RegExp ("(?:a|b){1,4}");
assert (r.exec ("bbb") == "bbb");

r = new RegExp ("(?:a|b){1,5}");
assert (r.exec ("abab") == "abab");

r = new RegExp ("(?:aba)*");
assert (r.exec ("aaaa") == "");

r = new RegExp ("(?:aba)+");
assert (r.exec ("aaaa") == undefined);

r = new RegExp ("(?:a|bb|c|d)");
assert (r.exec ("a") == "a");

r = new RegExp ("(?:a|b|c|d)");
assert (r.exec ("") == undefined);

r = new RegExp ("(?:a|b|c|d)");
assert (r.exec ("a") == "a");

r = new RegExp ("(?:a|b|c|d)");
assert (r.exec ("b") == "b");

r = new RegExp ("(?:a|b|c|d)");
assert (r.exec ("c") == "c");

r = new RegExp ("(?:a|b|c|d)");
assert (r.exec ("d") == "d");

r = new RegExp ("(?:a|b)+");
assert (r.exec ("aba") == "aba");

r = new RegExp ("(?:a|b)");
assert (r.exec ("b") == "b");

r = new RegExp ("(?:a)");
assert (r.exec ("a") == "a");

r = new RegExp ("(?:a)*");
assert (r.exec ("a") == "a");

r = new RegExp ("(?:a)*");
assert (r.exec ("aaaa") == "aaaa");

r = new RegExp ("(?:a)+");
assert (r.exec ("aaaa") == "aaaa");

r = new RegExp ("(?:a)?aa");
assert (r.exec ("aaaa") == "aaa");

r = new RegExp ("(?:a?){0,1}a");
assert (r.exec ("aa") == "aa");

r = new RegExp ("(?:a|aa){0,3}b");
assert (r.exec ("aaaaaab") == "aaaaaab");

r = new RegExp ("(?:(?:a){2,3}){4}b");
assert (r.exec ("aaaaaaaab") == "aaaaaaaab");


r = new RegExp ("(?:a)+?");
assert (r.exec ("aaaa") == "a");

r = new RegExp ("(?:a)*?aa");
assert (r.exec ("aaaa") == "aa");

r = new RegExp ("(?:aaa|aa)*?aa");
assert (r.exec ("aaaa") == "aa");

r = new RegExp ("(?:a)??aa");
assert (r.exec ("aaaa") == "aa");

r = new RegExp ("(?:(?:)*?)*?a");
assert (r.exec ("ba") == "a");

r = new RegExp ("(?:(?:bb?)*)*a");
assert (r.exec ("bbba") == "bbba");

r = new RegExp ("(?:(?:bb?)*)*bbb\\Ba");
assert (r.exec ("bbba") == "bbba");

r = new RegExp ("(?:a??){0,1}a");
assert (r.exec ("aa") == "aa");

r = new RegExp ("(?:a{0,1}?){0,1}a");
assert (r.exec ("aa") == "aa");
