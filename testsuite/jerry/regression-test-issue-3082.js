













var obj = {
  a: "str",
  b: function() {},
  c: true
}

assert (JSON.stringify (obj) === "{\"a\":\"str\",\"c\":true}");
assert (JSON.stringify (obj, null, 2) === "{\n  \"a\": \"str\",\n  \"c\": true\n}");

var obj = {
  f: function() {}
}

assert (JSON.stringify (obj) === "{}");
assert (JSON.stringify (obj, null, 2) === "{}");

var obj = {
  f: function() {},
  a: null
}

assert (JSON.stringify (obj) === "{\"a\":null}");
assert (JSON.stringify (obj, null, 2) === "{\n  \"a\": null\n}");

var obj = {
  a: false,
  f: function() {}
}

assert (JSON.stringify (obj) === "{\"a\":false}");
assert (JSON.stringify (obj, null, 2) === "{\n  \"a\": false\n}");
