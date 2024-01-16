













var r;

r = new RegExp ("(a)b\\1").exec("aba");
assert (r[0] == "aba");
assert (r[1] == "a");

r = new RegExp ("(a)b\\1").exec("b");
assert (r == undefined);

r = new RegExp ("(a)*b\\1").exec("b");
assert (r[0] == "b");
assert (r[1] == undefined);

assert (JSON.stringify (/[[]?(a)\1/.exec("aa")) === '["aa","a"]');
assert (JSON.stringify (/\1{2,5}()\B/.exec("asd")) === '["",""]');
