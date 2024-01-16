













var res = "".split();
assert (res[0] === "");

res = "foo".split();
assert (res[0] === "foo");

var str = "foo
res = str.split("");

assert (res.length === 17);
for (var i = 0; i < res.length; i++)
{
  assert (res[i] === str[i]);
}

res = str.split("", "foo");
assert (res.length === 0);

res = str.split("", "4");
assert (res.length === 4);
for (var i = 0; i < res.length; i++)
{
  assert (res[i] === str[i]);
}

res = str.split(undefined, undefined)
assert (res.length === 1);
assert (res[0] === "foo

res = str.split("a", false);
assert (res.length === 0);

res = str.split("a", true);
assert (res.length === 1);
assert (res[0] === "foo

res = str.split("a", NaN);
assert (res.length === 0);

res = str.split(["o"])
assert (res.length === 5);
assert (res[0] === "f");
assert (res[1] === "");
assert (res[2] === "
assert (res[3] === "");
assert (res[4] === "");

res = str.split(["o", "/"]);
assert (res.length === 1);
assert (res[0] === "foo

res = str.split("a", ["2"]);
assert (res.length === 2);
assert (res[0] === "foo
assert (res[1] === "r/b");

res = str.split("a", ["2", "3"]);
assert (res.length === 0);

var obj = {x: 12, b: undefined};
res = str.split(obj, 4);
assert (res.length === 1);
assert (res[0] === "foo

res = str.split("o", obj);
assert (res.length === 0);

res = str.split(false, true);
assert (res.length === 1);
assert (res[0] === "foo

res = str.split(/\/\
assert (res.length === 3);
assert (res[0] === "foo");
assert (res[1] === "bar/baz");
assert (res[2] === "foo");

res = str.split(/\/\
assert (res.length === 1);
assert (res[0] === "foo");

str = "fo123o12bar";
res = str.split(12, undefined);
assert (res.length === 3);
assert (res[0] === "fo");
assert (res[1] === "3o");
assert (res[2] === "bar");

str = "aaabababaab";
res = str.split(/aa+/);
assert (res.length === 3);
assert (res[0] === "");
assert (res[1] === "babab");
assert (res[2] === "b");

str = "A<B>bold</B>and<CODE>coded</CODE>";
res = str.split(/<(\/)?([^<>]+)>/);
assert (res.length === 13);
var expected = ["A", undefined, "B", "bold", "/", "B", "and", undefined, "CODE", "coded", "/", "CODE", ""];
for (var i = 0; i < res.length; i++)
{
  assert (res[i] === expected[i]);
}


try {
  String.prototype.split.call(undefined, "");
  assert (false);
}
catch (e)
{
  assert (e instanceof TypeError);
}


try {
  var obj = { toString: function() { throw new ReferenceError("foo"); } };
  String.prototype.split.call(obj, "");
  assert (false);
}
catch (e)
{
  assert (e instanceof ReferenceError);
  assert (e.message === "foo");
}


try {
  var obj = { toString: function() { throw new ReferenceError("foo"); } };
  "".split(obj);
  assert (false);
}
catch (e)
{
  assert (e instanceof ReferenceError);
  assert (e.message === "foo");
}

var str = "foo
res = str.split("a", Infinity);
assert (res.length === 0);

res = str.split(/\/\
assert (res.length === 3);
assert (res[0] === "foo");
assert (res[1] === "bar/baz");
assert (res[2] === "foo");
