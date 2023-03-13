













print("abcabc".replace("bc", ":") === "a:abc");
print("hello".replace("", ":") === ":hello");
print("hello".replace("h", "") === "ello");
print("".replace("", "h") === "h");

print("xabcxabcx".replace (/abc/g, "[$&][$`][$']") === "x[abc][x][xabcx]x[abc][xabcx][x]x");
print("abc".replace (/a(b)c|d()/, "[$1][$01][$2][$02][$99][$123][$012]") === "[b][b][][][$99][b23][b2]");
print("abc".replace("abc", "$x$$5$0$00$") === "$x$5$0$00$");

print("#x#".replace("x", "$1") === "#$1#");
print("#x#".replace(/(x)/, "$1$2") === "#x$2#");
print("#x#".replace(/(x)/, "$01$02$11$20") === "#x$02x1$20#");
print("#xy#".replace(/(x)((((((((((y))))))))))/, "$07|$20|$11|$12|$110|$99|$011") === "#y|y0|y|x2|y0|y9|x1#");
print("#xy#".replace(/(x)((((((((y))))))))/, "$00|$01|$011|$090|$10|$99") === "#$00|x|x1|y0|x0|y9#");

print("a true true story".replace(true) === "a undefined true story");
print("1234".replace(23, 32) === "1324");

print("abcabc".replace(/bc/, ":") === "a:abc");
print("axbcxx".replace(/x*/g, ":") === ":a::b:c::");

print("".replace(/|/g,"஻") === "஻");
print("஻BB8B@abXde^".replace(/a/g,"$஻Bce((/a%") === "஻BB8B@$஻Bce((/a%bXde^");
print("abcab".replace(/a/g,"˙Ł$Đ") === "˙Ł$Đbc˙Ł$Đb");
print("˙Ł$Đbc˙Ł$Đb".replace("Ł$","ab") === "˙abĐbc˙Ł$Đb");

print(String.prototype.replace.call (12321, /2/g, ".") === "1.3.1");

try
{
  String.prototype.replace.call (null, "u", ".");
  print(false);
}
catch (e)
{
  print(e instanceof TypeError);
}

print("98765".replace(76, function () { return {}; }) === "98[object Object]5");

function concat_arguments()
{
  var str = "";
  for (var i = 0; i < arguments.length; i++)
  {
    str += "[" + arguments[i] + "]";
  }
  return str;
}

print("abcdabcd".replace("cd", concat_arguments) === "ab[cd][2][abcdabcd]abcd");
print("abcdef".replace (/a((b)c)|d()/, concat_arguments) === "[abc][bc][b][undefined][0][abcdef]def");

try
{
  "x".replace("x", function() { throw "MyError"; });
  print(false);
}
catch (e)
{
  print(e === "MyError");
}

print("\ud801\udc00".replace("\ud801", "#") === "#\udc00");
print("\ud801\udc00".replace("\udc00", "#") === "\ud801#");

var global = this;

function case1()
{
  print(this === global);
  return "y";
}

function case2()
{
  "use strict";
  print(this === undefined);
  return "y";
}

print("x".replace("x", case1) === "y");
print("x".replace("x", case2) === "y");

var regexp = /r/g;

Object.defineProperty(regexp, "lastIndex", {
  configurable : false,
  enumerable : false,
  value : 0,
  writable : false
});

try {
  "r".replace (regexp, "x");
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

try {
  "str".replace ({toString: function () {throw "abrupt search toString"}}, "");
  print(false);
} catch (e) {
  print(e === "abrupt search toString");
}

try {
  "str".replace ("str", {toString: function () {throw "abrupt search toString"}});
  print(false);
} catch (e) {
  print(e === "abrupt search toString");
}

try {
  "str".replace ("str", function () {return {toString: function () {throw "abrupt replacer toString"}}});
  print(false);
} catch (e) {
  print(e === "abrupt replacer toString");
}

var r = /./;
r.lastIndex = {
  valueOf: function() {
    throw "abrupt lastIndex"
  }
}

try {
  "a".replace(r, "b");
  print(false);
} catch (e) {
  print(e === "abrupt lastIndex");
}
