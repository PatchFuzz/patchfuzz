













var r;

r = new RegExp ("(a)b\\1").exec("aba");
print(r[0] == "aba");
print(r[1] == "a");

r = new RegExp ("(a)b\\1").exec("b");
print(r == undefined);

r = new RegExp ("(a)*b\\1").exec("b");
print(r[0] == "b");
print(r[1] == undefined);

print(JSON.stringify (/[[]?(a)\1/.exec("aa")) === '["aa","a"]');
print(JSON.stringify (/\1{2,5}()\B/.exec("asd")) === '["",""]');
