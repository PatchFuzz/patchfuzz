













var obj = {
  a: "str",
  b: function() {},
  c: true
}

print(JSON.stringify (obj) === "{\"a\":\"str\",\"c\":true}");
print(JSON.stringify (obj, null, 2) === "{\n  \"a\": \"str\",\n  \"c\": true\n}");

var obj = {
  f: function() {}
}

print(JSON.stringify (obj) === "{}");
print(JSON.stringify (obj, null, 2) === "{}");

var obj = {
  f: function() {},
  a: null
}

print(JSON.stringify (obj) === "{\"a\":null}");
print(JSON.stringify (obj, null, 2) === "{\n  \"a\": null\n}");

var obj = {
  a: false,
  f: function() {}
}

print(JSON.stringify (obj) === "{\"a\":false}");
print(JSON.stringify (obj, null, 2) === "{\n  \"a\": false\n}");
