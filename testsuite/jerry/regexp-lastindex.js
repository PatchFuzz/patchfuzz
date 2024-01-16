













var t = /abc/g;
t.lastIndex = -12.5;
result = t.exec("abc   abc");
assert(result[0] === "abc");
assert(result.index === 0);
assert(t.lastIndex === 3);

assert(RegExp.prototype.lastIndex === undefined)

var r = /./y
r.lastIndex = -1;
assert (JSON.stringify(r.exec("abca")) === '["a"]');
assert (r.lastIndex === 1);
assert (JSON.stringify(r.exec("abca")) === '["b"]');
assert (r.lastIndex === 2);

r.lastIndex = 5;
assert (JSON.stringify(r.exec("abca")) === 'null');
assert (r.lastIndex === 0);

var r = /a/y
assert (JSON.stringify(r.exec("abca")) === '["a"]');
assert (r.lastIndex === 1);
assert (JSON.stringify(r.exec("abca")) === 'null');
assert (r.lastIndex === 0);

var r = /./g
r.lastIndex = -1;
assert (JSON.stringify(r.exec("abca")) === '["a"]');
assert (r.lastIndex === 1);
assert (JSON.stringify(r.exec("abca")) === '["b"]');
assert (r.lastIndex === 2);

r.lastIndex = 5;
assert (JSON.stringify(r.exec("abca")) === 'null');
assert (r.lastIndex === 0);

var r = /a/g
assert (JSON.stringify(r.exec("abca")) === '["a"]');
assert (r.lastIndex === 1);
assert (JSON.stringify(r.exec("abca")) === '["a"]');
assert (r.lastIndex === 4);
assert (JSON.stringify(r.exec("abca")) === 'null');
assert (r.lastIndex === 0);

var r = /./uim
r.lastIndex = 2;
assert (JSON.stringify(r.exec("abcd")) === '["a"]');
assert (r.lastIndex === 2);

r.lastIndex = "lastIndex";
assert (JSON.stringify(r.exec("abcd")) === '["a"]');
assert (r.lastIndex === "lastIndex");
