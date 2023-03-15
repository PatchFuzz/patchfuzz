















function length_configurable()
{
  function is_es51() {
    return (typeof g === "function");
    { function g() {} }
  }
  return is_es51() ? false : true;
}

print(Object.getOwnPropertyDescriptor(String.prototype.match, 'length').configurable === length_configurable());
print(Object.getOwnPropertyDescriptor(String.prototype.match, 'length').enumerable === false);
print(Object.getOwnPropertyDescriptor(String.prototype.match, 'length').writable === false);

function match_equals (match_result, expected)
{
  if (match_result.length !== expected.length)
  {
    return false;
  }

  for(var i = 0; i < expected.length; i++)
  {
    if (match_result[i] !== expected[i])
    {
      return false;
    }
  }

  return true;
}

print(match_equals ("hello".match("o"), ["o"]));
print("hello".match(/ /g) == void 0);

print(match_equals ("hello".match(/o/), ["o"]));

print(match_equals ("hello".match(/l/), ["l"]));
print(match_equals ("hello".match(/l/g), ["l", "l"]));

print("".match(/a/g) == void 0);

print("".match() !== void 0 );

print(match_equals ("".match(), [""]));
print(match_equals ("".match(undefined), [""]));
print(match_equals ("".match(""), [""]));

print(match_equals ("test 1, test 2, test 3, test 45".match(/[0-9]+/g), ["1", "2", "3", "45"]));

var re = new RegExp("", "g");
print(match_equals ("a".match(re), ["", ""]));



try {
  String.prototype.match.call(undefined, "");
  print(false);
}
catch (e)
{
  print(e instanceof TypeError);
}


try {
  var obj = { toString: function() { throw new ReferenceError("foo"); } };
  String.prototype.match.call(obj, "");
  print(false);
}
catch (e)
{
  print(e instanceof ReferenceError);
  print(e.message === "foo");
}


try {
  var obj = { toString: function() { throw new ReferenceError("foo"); } };
  "".match (obj);
  print(false);
}
catch (e)
{
  print(e instanceof ReferenceError);
  print(e.message === "foo");
}


var re = /a/g;
re.lastIndex = 3;

print(match_equals ("a".match(re), ["a"]));

class NewRegExp extends RegExp {
  [Symbol.match](str) {
      var result = RegExp.prototype[Symbol.match].call(this, str);
      var successful = 0;
      if (result) {
          successful = 1;
      }
      return successful;
  }
}

var str = 'This is a random string.';
var regexp = new NewRegExp(/[A-Z]/g);
print(str.match(regexp) === 1);

try {
String.prototype.match.call(null, regexp);
print(false);
} catch (e) {
print(e instanceof TypeError);
}

var regexp2 = /[A-Z]/g;
regexp2[Symbol.match] = "foo";

try {
str.match(regexp2);
print(false);
} catch (e) {
print(e instanceof TypeError);
}

Object.defineProperty (regexp2, Symbol.match, { get () { throw 5 }});

try {
str.match(regexp2);
print(false);
} catch (e) {
print(e === 5);
}

var wrong_sytnax = "str.match(/[A-5]/g";

try {
eval(wrong_sytnax);
print(false);
} catch (e) {
print(e instanceof SyntaxError);
}

delete(RegExp.prototype[Symbol.match]);

try {
str.match(regexp);
print(false);
} catch (e) {
print(e instanceof TypeError);
}

var regexp3 = "foo";
RegExp.prototype[Symbol.match] = 3;

try {
str.match(regexp3);
print(false);
} catch (e) {
print(e instanceof TypeError);
}
