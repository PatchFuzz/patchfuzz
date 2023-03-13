














print(JSON.stringify ("") === '""');

normal_string = "asdasd";
print(JSON.stringify (normal_string) == '"asdasd"');

format_characters = "\ba\fs\nd\ra\tsd";
print(JSON.stringify (format_characters) == '"\\ba\\fs\\nd\\ra\\tsd"');

ctl_string = "asdasd";
print(JSON.stringify (ctl_string) == '"asd\\u001fasd"');

escpad_string = "\"asda\sd";
print(JSON.stringify (escpad_string) == '"\\"asdasd"');

print(JSON.stringify('\u2040') == '"⁀"');
print(JSON.stringify('abc\u2040\u2030cba') == '"abc⁀‰cba"');


print(JSON.stringify (1) === '1');
print(JSON.stringify (true) === 'true');
print(JSON.stringify ("foo") === '"foo"');
print(JSON.stringify (null) === 'null');
print(JSON.stringify (undefined) === undefined);

print(JSON.stringify (new Number(1)) === '1');
print(JSON.stringify (new Boolean(true)) === 'true');
print(JSON.stringify (new String("foo")) === '"foo"');


empty_object = {}
print(JSON.stringify (empty_object) == '{}');

empty_object = {};
empty_object.a = undefined;

print(JSON.stringify (empty_object) == '{}');

p_object = { "a": 1, "b": true, "c": "foo", "d": null, "e": undefined };
print(JSON.stringify (p_object) == '{"a":1,"b":true,"c":"foo","d":null}');

o_object = { "a": new Number(1), "b": new Boolean(true), "c": new String("foo") };
print(JSON.stringify (o_object) == '{"a":1,"b":true,"c":"foo"}');

child = { "a": 1, "b": new String("\nfoo"), "c": undefined };
parent = { "a": true, "b": child, "c": null};

print(JSON.stringify (parent) == '{"a":true,"b":{"a":1,"b":"\\nfoo"},"c":null}');

recursive_object = {};
recursive_object.a = 2;
recursive_object.b = recursive_object;

try {
  JSON.stringify (recursive_object)
  
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


empty_array = [];
print(JSON.stringify (empty_array) == '[]');

array = [undefined];
print(JSON.stringify (array) == '[null]');

p_array = [1, true, "foo", null, undefined];
print(JSON.stringify (p_array) == '[1,true,"foo",null,null]');

o_array = [new Number(1), new Boolean(true), new String("foo")];
print(JSON.stringify (o_array) == '[1,true,"foo"]');

child = [ 1, new String("\nfoo"), undefined ];
parent = [ true, child, null ];

print(JSON.stringify (parent) == '[true,[1,"\\nfoo",null],null]');

recursive_array = [];
recursive_array[0] = 2;
recursive_array[1] = recursive_array;

try {
  JSON.stringify (recursive_array)
  
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}

object = {"a": 1, "b": [1, true, {"a": "foo"}]};
print(JSON.stringify (object) == '{"a":1,"b":[1,true,{"a":"foo"}]}');

object = {"a": [1], "b": {}};
print(JSON.stringify(object) === '{"a":[1],"b":{}}');

array = [1, {"a": 2, "b": true, c: [3]}];
print(JSON.stringify (array) == '[1,{"a":2,"b":true,"c":[3]}]');


to_json_object = {};
to_json_object.a = 2;
to_json_object.toJSON = function (key) { return 3; };

print(JSON.stringify (to_json_object) === "3");

function replacer_function (key, value)
{
  if (typeof(value) == "string")
    return "FOO";
  return value;
}

object = { "a": "JSON", "b": new String("JSON"), "c": 3 };
print(JSON.stringify (object, replacer_function) == '{"a":"FOO","b":"JSON","c":3}');

filter = ["a", "b"];
print(JSON.stringify (object, filter) == '{"a":"JSON","b":"JSON"}');

print(JSON.stringify ([], [ 'foo', 'foo' ]) === '[]');

number = new Number(2.2);
number.toString = {};
number.valueOf = [];

try
{
  JSON.stringify([], [number]);
  
  print(false);
}
catch (e)
{
  print(e instanceof TypeError);
}


function replacer_thrower (key, value)
{
  throw new ReferenceError("foo");
  return value;
}

try {
  JSON.stringify (object, replacer_thrower)
  
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


object = { "a": 2 };
print(JSON.stringify (object, 3) == '{"a":2}');
print(JSON.stringify (object, true) == '{"a":2}');
print(JSON.stringify (object, null) == '{"a":2}');
print(JSON.stringify (object, undefined) == '{"a":2}');
print(JSON.stringify (object, "foo") == '{"a":2}');


print(JSON.stringify (object, new Boolean (true)) == '{"a":2}');
print(JSON.stringify (object, new Number (3)) == '{"a":2}');
print(JSON.stringify (object, new String ("foo")) == '{"a":2}');
print(JSON.stringify (object, { "a": 3 }) == '{"a":2}');


object = {"a": 2};
print(JSON.stringify (object, null, "   ") == '{\n   "a": 2\n}');
print(JSON.stringify (object, null, "asd") == '{\nasd"a": 2\n}');
print(JSON.stringify (object, null, "asd0123456789") == '{\nasd0123456"a": 2\n}');
print(JSON.stringify (object, null, "asd\u20400123456789") == '{\nasd⁀012345"a": 2\n}');
print(JSON.stringify (object, null, 100) == '{\n          "a": 2\n}');
print(JSON.stringify (object, null, -5) == '{"a":2}');

array = [2];
print(JSON.stringify (array, null, "   ") == '[\n   2\n]');
print(JSON.stringify (array, null, "asd") == '[\nasd2\n]');
print(JSON.stringify (array, null, "asd0123456789") == '[\nasd01234562\n]');
print(JSON.stringify (array, null, "asd\u20400123456789") == '[\nasd⁀0123452\n]');
print(JSON.stringify (array, null, 100) == '[\n          2\n]');
print(JSON.stringify (array, null, -5) == '[2]');

nested_object = {"a": 2, "b": {"c": 1, "d": true}};
print(JSON.stringify (nested_object, null, 2) == '{\n  "a": 2,\n  "b": {\n    "c": 1,\n    "d": true\n  }\n}');

nested_array = [2, [1,true]];
print(JSON.stringify (nested_array, null, 2) == '[\n  2,\n  [\n    1,\n    true\n  ]\n]');


object = { "a": 2 };
print(JSON.stringify (object, null, true) == '{"a":2}');
print(JSON.stringify (object, null, null) == '{"a":2}');
print(JSON.stringify (object, null, undefined) == '{"a":2}');


print(JSON.stringify (object, null, new Boolean (true)) == '{"a":2}');
print(JSON.stringify (object, null, [1, 2, 3] ) == '{"a":2}');
print(JSON.stringify (object, null, { "a": 3 }) == '{"a":2}');


print(JSON.stringify ({"key1": false, "key2": 12}, [], "abc") === '{}');
print(JSON.stringify ({"key1": false, "key2": 12}, ["key1"], "abc") === '{\nabc"key1": false\n}');
print(JSON.stringify ({"key1": false, "key2": 12}, ["key2"], "abc") === '{\nabc"key2": 12\n}');
print(JSON.stringify ({"key1": false, "key2": 12}, ["key1", "key2"], "abc") === '{\nabc"key1": false,\nabc"key2": 12\n}');
print(JSON.stringify ({"key1": false, "key2": 12}, ["key", "key3"], "abc") === '{}');


print(JSON.stringify(new Proxy(['foo'], {})) === '["foo"]');
print(JSON.stringify(new Proxy({0:"foo"}, {})) === '{"0":"foo"}');

var target = [1,2,3];
var handler = {
  get(target, prop) {
    if (prop == "length")
    {
      throw 42;
    }
  }
}

try {
  JSON.stringify(new Proxy(target,handler));
  print(false);
} catch (e) {
  print(e === 42);
}

var revocable = Proxy.revocable (target, { get (t, p , r) {
  if (p == "toJSON") {
    revocable.revoke();
  }
}});
var proxy = revocable.proxy;

try {
  JSON.stringify(proxy);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


print(JSON.stringify("ab𬄕c") === '"ab𬄕\\u001fc"');
print(JSON.stringify("ab\uDC01cd") === '"ab\\udc01c\\u001fd"');
print(JSON.stringify("ab\uDC01cd\uD8331e") === '"ab\\udc01c\\u001fd\\ud8331e"');


var handle = Proxy.revocable([], {});
handle.revoke();

try {
  JSON.stringify(handle.proxy);
  print(false);
} catch (ex) {
  print(ex instanceof TypeError);
}
