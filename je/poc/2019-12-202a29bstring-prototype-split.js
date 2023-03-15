













var res = "".split();
print(res[0] === "");

res = "foo".split();
print(res[0] === "foo");

var str = "foo
res = str.split("");

print(res.length === 17);
for (var i = 0; i < res.length; i++)
{
  print(res[i] === str[i]);
}

res = str.split("", "foo");
print(res.length === 0);

res = str.split("", "4");
print(res.length === 4);
for (var i = 0; i < res.length; i++)
{
  print(res[i] === str[i]);
}

res = str.split(undefined, undefined)
print(res.length === 1);
print(res[0] === "foo

res = str.split("a", false);
print(res.length === 0);

res = str.split("a", true);
print(res.length === 1);
print(res[0] === "foo

res = str.split("a", NaN);
print(res.length === 0);

res = str.split(["o"])
print(res.length === 5);
print(res[0] === "f");
print(res[1] === "");
print(res[2] === "
print(res[3] === "");
print(res[4] === "");

res = str.split(["o", "/"]);
print(res.length === 1);
print(res[0] === "foo

res = str.split("a", ["2"]);
print(res.length === 2);
print(res[0] === "foo
print(res[1] === "r/b");

res = str.split("a", ["2", "3"]);
print(res.length === 0);

var obj = {x: 12, b: undefined};
res = str.split(obj, 4);
print(res.length === 1);
print(res[0] === "foo

res = str.split("o", obj);
print(res.length === 0);

res = str.split(false, true);
print(res.length === 1);
print(res[0] === "foo

res = str.split(/\/\
print(res.length === 3);
print(res[0] === "foo");
print(res[1] === "bar/baz");
print(res[2] === "foo");

res = str.split(/\/\
print(res.length === 1);
print(res[0] === "foo");

str = "fo123o12bar";
res = str.split(12, undefined);
print(res.length === 3);
print(res[0] === "fo");
print(res[1] === "3o");
print(res[2] === "bar");

str = "aaabababaab";
res = str.split(/aa+/);
print(res.length === 3);
print(res[0] === "");
print(res[1] === "babab");
print(res[2] === "b");

str = "A<B>bold</B>and<CODE>coded</CODE>";
res = str.split(/<(\/)?([^<>]+)>/);
print(res.length === 13);
var expected = ["A", undefined, "B", "bold", "/", "B", "and", undefined, "CODE", "coded", "/", "CODE", ""];
for (var i = 0; i < res.length; i++)
{
  print(res[i] === expected[i]);
}


try {
  String.prototype.split.call(undefined, "");
  print(false);
}
catch (e)
{
  print(e instanceof TypeError);
}


try {
  var obj = { toString: function() { throw new ReferenceError("foo"); } };
  String.prototype.split.call(obj, "");
  print(false);
}
catch (e)
{
  print(e instanceof ReferenceError);
  print(e.message === "foo");
}


try {
  var obj = { toString: function() { throw new ReferenceError("foo"); } };
  "".split(obj);
  print(false);
}
catch (e)
{
  print(e instanceof ReferenceError);
  print(e.message === "foo");
}

var str = "foo
res = str.split("a", Infinity);
print(res.length === 0);

res = str.split(/\/\
print(res.length === 3);
print(res[0] === "foo");
print(res[1] === "bar/baz");
print(res[2] === "foo");
