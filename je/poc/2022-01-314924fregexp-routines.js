













var r;

r = new RegExp ("a");
print(r.exec ("a") == "a");
print(r.exec ("b") == null);
try {
  r.exec.call({}, "a");
  print(false)
}
catch (e)
{
  print(e instanceof TypeError);
}

print(r.test ("a") == true);
print(r.test ("b") == false);
try {
  r.test.call({}, "a");
  print(false)
}
catch (e)
{
  print(e instanceof TypeError);
}

r = new RegExp ("a", "mig");
print(r.toString () == "/a/gim");


var re = new RegExp("a", "g");
result = re.exec("a");
print(result.length === 1);
print(result[0] === "a");
print(re.lastIndex === 1);

print(re.exec("a") === null);
print(re.lastIndex === 0);

result = re.exec("a");
print(result.length === 1);
print(result[0] === "a");
print(re.lastIndex === 1);

var re1 = /foo/gim;
var re2 = /bar/g;

try {
  re2.compile("asd", "ggim");
  print(false);
} catch (e) {
  print(e instanceof SyntaxError);
  print(re2 == "/bar/g");
}

try {
  re2.compile("[", undefined);
  print(false);
} catch (e) {
  print(e instanceof SyntaxError);
  print(re2 == "/bar/g");
}

try {
  re2.compile(re1, "im");
  print(false);
} catch (e) {
  print(e instanceof TypeError);
  print(re2 == "/bar/g");
}

re2.lastIndex = 2;
print(re2.compile("asd", "im") === re2);

print(re2 == "/asd/im");
print(re2.global === false);
print(re2.ignoreCase === true);
print(re2.multiline === true);
print(re2.source === "asd");
print(re2.lastIndex === 0);

print(re2.compile(re1) === re2);
print(re2.toString() === re1.toString());
print(re2.global === re1.global);
print(re2.ignoreCase === re1.ignoreCase);
print(re2.multiline === re1.multiline);
print(re2.source === re1.source);
print(re2.lastIndex === 0);

var r = /./
r.lastIndex = {
  valueOf: function() {
    throw "abrupt lastIndex"
  }
}

try {
  r.exec("a");
  print(false);
} catch (e) {
  print(e === "abrupt lastIndex");
}


var r = new RegExp('a', 'gimuy');
print(r.flags === 'gimuy');
print(r.toString() === '/a/gimuy');

try {
  Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.call(42);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

var o = {
  global: true,
  unicode: true,
  sticky: true,
  source: "str"
}

Object.defineProperty(o, 'flags', Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags'));
print(o.flags === "guy");
print(RegExp.prototype.toString.call (o) === "/str/guy");

Object.defineProperty(o, 'multiline', { 'get': function () {throw "abrupt flag get"; }});
try {
  o.flags
  print(false);
} catch (e) {
  print(e === "abrupt flag get");
}

try {
  RegExp.prototype.toString.call(42);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

print(RegExp.prototype.toString.call({}) === "/undefined/undefined");

var o = {};
Object.defineProperty (o, 'source', { 'get' : function () {throw "abrupt source get"; } });
try {
  RegExp.prototype.toString.call(o);
  print(false);
} catch (e) {
  print(e === "abrupt source get");
}

var o = {source: {toString: function() {throw "abrupt source toString";}}};
try {
  RegExp.prototype.toString.call(o);
  print(false);
} catch (e) {
  print(e === "abrupt source toString");
}

var o = {source: "str"};
Object.defineProperty (o, 'flags', { 'get' : function () {throw "abrupt flags get"; } });
try {
  RegExp.prototype.toString.call(o);
  print(false);
} catch (e) {
  print(e === "abrupt flags get");
}

var o = {source: "str", flags: {toString: function() {throw "abrupt flags toString";}}};
try {
  RegExp.prototype.toString.call(o);
  print(false);
} catch (e) {
  print(e === "abrupt flags toString");
}

var o = {
  global: true,
  source: "str"
}

Object.defineProperty(o, 'unicode', { 'get': function () {throw "abrupt unicode get"; }});
try {
  RegExp.prototype[Symbol.match].call(o, "str");
  print(false);
} catch (e) {
  print(e === "abrupt unicode get");
}

print("str𐲡fgh".replace(/(?:)/gu, "x") === 'xsxtxrx𐲡xfxgxhx');
print("str𐲡fgh".replace(/(?:)/g, "x") === 'xsxtxrx\ud803x\udca1xfxgxhx');

r = /(?:)/gu;

r.exec = function (s) { return RegExp.prototype.exec.call(this, s); };

print("str𐲡fgh".replace(r, "x") === 'xsxtxrx𐲡xfxgxhx');
Object.defineProperty(r, 'unicode', {value: false});
print("str𐲡fgh".replace(r, "x") === 'xsxtxrx\ud803x\udca1xfxgxhx');

r = /(?:)/gu;
print(RegExp.prototype[Symbol.match].call(r, "str𐲡fgh").length === 8);
Object.defineProperty(r, 'unicode', {value: false});
print(RegExp.prototype[Symbol.match].call(r, "str𐲡fgh").length === 9);

r = /(?:)/gy;
r.lastIndex = 2;
print("asd".replace(r, "x") === "xaxsxdx");
print(r.lastIndex === 0);

r.lastIndex = 5;
print("asd".replace(r, "x") === "xaxsxdx");
print(r.lastIndex === 0);

r = /(?:)/y;
r.lastIndex = 2;
print("asd".replace(r, "x") === "asxd");
print(r.lastIndex === 2);

r.lastIndex = 5;
print("asd".replace(r, "x") === "asd");
print(r.lastIndex === 0);

r.lastIndex = 2;

r.exec = function (s) { return RegExp.prototype.exec.call(this, s); };
print("asd".replace(r, "x") === "asxd");
print(r.lastIndex === 2);

r.lastIndex = 5;
print("asd".replace(r, "x") === "asd");
print(r.lastIndex === 0);

print(RegExp.prototype[Symbol.match].call(/a/y, "aaa").length === 1);
print(RegExp.prototype[Symbol.match].call(/a/gy, "aaa").length === 3);

var length = Object.getOwnPropertyDescriptor(RegExp.prototype.compile, "length");
print(!length.enumerable);
print(!length.writable);
print(length.configurable);
print(length.value === 2);

var re = /./;
re.lastIndex = 23;

try {
  re.compile(re, null);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

try {
  re.compile(re, 0);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

try {
  re.compile(re, '');
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

try {
  re.compile(re, false);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

try {
  re.compile(re, {});
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

try {
  re.compile(re, []);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

print(re.lastIndex === 23);

var subject = /initial/;
Object.defineProperty(subject, 'lastIndex', { value: 45, writable: false });

try {
  subject.compile(/updated/gi);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

print(subject.toString() === new RegExp('updated', 'gi').toString());
print(subject.lastIndex === 45);
