














assert (JSON.stringify ("") === '""');

normal_string = "asdasd";
assert (JSON.stringify (normal_string) == '"asdasd"');

format_characters = "\ba\fs\nd\ra\tsd";
assert (JSON.stringify (format_characters) == '"\\ba\\fs\\nd\\ra\\tsd"');

ctl_string = "asdasd";
assert (JSON.stringify (ctl_string) == '"asd\\u001fasd"');

escpad_string = "\"asda\sd";
assert (JSON.stringify (escpad_string) == '"\\"asdasd"');

assert (JSON.stringify('\u2040') == '"⁀"');
assert (JSON.stringify('abc\u2040\u2030cba') == '"abc⁀‰cba"');


assert (JSON.stringify (1) === '1');
assert (JSON.stringify (true) === 'true');
assert (JSON.stringify ("foo") === '"foo"');
assert (JSON.stringify (null) === 'null');
assert (JSON.stringify (undefined) === undefined);

assert (JSON.stringify (new Number(1)) === '1');
assert (JSON.stringify (new Boolean(true)) === 'true');
assert (JSON.stringify (new String("foo")) === '"foo"');


empty_object = {}
assert (JSON.stringify (empty_object) == '{}');

empty_object = {};
empty_object.a = undefined;

assert (JSON.stringify (empty_object) == '{}');

p_object = { "a": 1, "b": true, "c": "foo", "d": null, "e": undefined };
assert (JSON.stringify (p_object) == '{"a":1,"b":true,"c":"foo","d":null}');

o_object = { "a": new Number(1), "b": new Boolean(true), "c": new String("foo") };
assert (JSON.stringify (o_object) == '{"a":1,"b":true,"c":"foo"}');

child = { "a": 1, "b": new String("\nfoo"), "c": undefined };
parent = { "a": true, "b": child, "c": null};

assert (JSON.stringify (parent) == '{"a":true,"b":{"a":1,"b":"\\nfoo"},"c":null}');

recursive_object = {};
recursive_object.a = 2;
recursive_object.b = recursive_object;

try {
  JSON.stringify (recursive_object)
  
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}


empty_array = [];
assert (JSON.stringify (empty_array) == '[]');

array = [undefined];
assert (JSON.stringify (array) == '[null]');

p_array = [1, true, "foo", null, undefined];
assert (JSON.stringify (p_array) == '[1,true,"foo",null,null]');

o_array = [new Number(1), new Boolean(true), new String("foo")];
assert (JSON.stringify (o_array) == '[1,true,"foo"]');

child = [ 1, new String("\nfoo"), undefined ];
parent = [ true, child, null ];

assert (JSON.stringify (parent) == '[true,[1,"\\nfoo",null],null]');

recursive_array = [];
recursive_array[0] = 2;
recursive_array[1] = recursive_array;

try {
  JSON.stringify (recursive_array)
  
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

object = {"a": 1, "b": [1, true, {"a": "foo"}]};
assert (JSON.stringify (object) == '{"a":1,"b":[1,true,{"a":"foo"}]}');

object = {"a": [1], "b": {}};
assert (JSON.stringify(object) === '{"a":[1],"b":{}}');

array = [1, {"a": 2, "b": true, c: [3]}];
assert (JSON.stringify (array) == '[1,{"a":2,"b":true,"c":[3]}]');


to_json_object = {};
to_json_object.a = 2;
to_json_object.toJSON = function (key) { return 3; };

assert (JSON.stringify (to_json_object) === "3");

function replacer_function (key, value)
{
  if (typeof(value) == "string")
    return "FOO";
  return value;
}

object = { "a": "JSON", "b": new String("JSON"), "c": 3 };
assert (JSON.stringify (object, replacer_function) == '{"a":"FOO","b":"JSON","c":3}');

filter = ["a", "b"];
assert (JSON.stringify (object, filter) == '{"a":"JSON","b":"JSON"}');

assert (JSON.stringify ([], [ 'foo', 'foo' ]) === '[]');

number = new Number(2.2);
number.toString = {};
number.valueOf = [];

try
{
  JSON.stringify([], [number]);
  
  assert (false);
}
catch (e)
{
  assert (e instanceof TypeError);
}


function replacer_thrower (key, value)
{
  throw new ReferenceError("foo");
  return value;
}

try {
  JSON.stringify (object, replacer_thrower)
  
  assert (false);
} catch (e) {
  assert (e.message === "foo");
  assert (e instanceof ReferenceError);
}


object = { "a": 2 };
assert (JSON.stringify (object, 3) == '{"a":2}');
assert (JSON.stringify (object, true) == '{"a":2}');
assert (JSON.stringify (object, null) == '{"a":2}');
assert (JSON.stringify (object, undefined) == '{"a":2}');
assert (JSON.stringify (object, "foo") == '{"a":2}');


assert (JSON.stringify (object, new Boolean (true)) == '{"a":2}');
assert (JSON.stringify (object, new Number (3)) == '{"a":2}');
assert (JSON.stringify (object, new String ("foo")) == '{"a":2}');
assert (JSON.stringify (object, { "a": 3 }) == '{"a":2}');


object = {"a": 2};
assert (JSON.stringify (object, null, "   ") == '{\n   "a": 2\n}');
assert (JSON.stringify (object, null, "asd") == '{\nasd"a": 2\n}');
assert (JSON.stringify (object, null, "asd0123456789") == '{\nasd0123456"a": 2\n}');
assert (JSON.stringify (object, null, "asd\u20400123456789") == '{\nasd⁀012345"a": 2\n}');
assert (JSON.stringify (object, null, 100) == '{\n          "a": 2\n}');
assert (JSON.stringify (object, null, -5) == '{"a":2}');

array = [2];
assert (JSON.stringify (array, null, "   ") == '[\n   2\n]');
assert (JSON.stringify (array, null, "asd") == '[\nasd2\n]');
assert (JSON.stringify (array, null, "asd0123456789") == '[\nasd01234562\n]');
assert (JSON.stringify (array, null, "asd\u20400123456789") == '[\nasd⁀0123452\n]');
assert (JSON.stringify (array, null, 100) == '[\n          2\n]');
assert (JSON.stringify (array, null, -5) == '[2]');

nested_object = {"a": 2, "b": {"c": 1, "d": true}};
assert (JSON.stringify (nested_object, null, 2) == '{\n  "a": 2,\n  "b": {\n    "c": 1,\n    "d": true\n  }\n}');

nested_array = [2, [1,true]];
assert (JSON.stringify (nested_array, null, 2) == '[\n  2,\n  [\n    1,\n    true\n  ]\n]');


object = { "a": 2 };
assert (JSON.stringify (object, null, true) == '{"a":2}');
assert (JSON.stringify (object, null, null) == '{"a":2}');
assert (JSON.stringify (object, null, undefined) == '{"a":2}');


assert (JSON.stringify (object, null, new Boolean (true)) == '{"a":2}');
assert (JSON.stringify (object, null, [1, 2, 3] ) == '{"a":2}');
assert (JSON.stringify (object, null, { "a": 3 }) == '{"a":2}');


assert (JSON.stringify ({"key1": false, "key2": 12}, [], "abc") === '{}');
assert (JSON.stringify ({"key1": false, "key2": 12}, ["key1"], "abc") === '{\nabc"key1": false\n}');
assert (JSON.stringify ({"key1": false, "key2": 12}, ["key2"], "abc") === '{\nabc"key2": 12\n}');
assert (JSON.stringify ({"key1": false, "key2": 12}, ["key1", "key2"], "abc") === '{\nabc"key1": false,\nabc"key2": 12\n}');
assert (JSON.stringify ({"key1": false, "key2": 12}, ["key", "key3"], "abc") === '{}');


assert(JSON.stringify(new Proxy(['foo'], {})) === '["foo"]');
assert(JSON.stringify(new Proxy({0:"foo"}, {})) === '{"0":"foo"}');

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
  assert(false);
} catch (e) {
  assert(e === 42);
}

var revocable = Proxy.revocable (target, { get (t, p , r) {
  if (p == "toJSON") {
    revocable.revoke();
  }
}});
var proxy = revocable.proxy;

try {
  JSON.stringify(proxy);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


assert(JSON.stringify("ab𬄕c") === '"ab𬄕\\u001fc"');
assert(JSON.stringify("ab\uDC01cd") === '"ab\\udc01c\\u001fd"');
assert(JSON.stringify("ab\uDC01cd\uD8331e") === '"ab\\udc01c\\u001fd\\ud8331e"');


var handle = Proxy.revocable([], {});
handle.revoke();

try {
  JSON.stringify(handle.proxy);
  assert(false);
} catch (ex) {
  assert(ex instanceof TypeError);
}
