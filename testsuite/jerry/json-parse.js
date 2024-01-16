
















var str;
var result;
var log;

function check_parse_error (str)
{
  try {
    JSON.parse (str);
    
    assert (false);
  } catch (e) {
  }
}

str = ' null ';
assert (JSON.parse (str) === null);
str = 'true';
assert (JSON.parse (str) === true);
str = 'false';
assert (JSON.parse (str) === false);
str = '-32.5e002';
assert (JSON.parse (str) == -3250);
str = '"str"';
assert (JSON.parse (str) == "str");
str = '"\\b\\f\\n\\t\\r"'
assert (JSON.parse (str) === "\b\f\n\t\r");

str = '"\\u0000\\u001f"';
assert (JSON.parse (str) === "\x00\x1f");
str = '"\\ud801\\udc00\\ud801\udc00\ud801\\udc00\ud801\udc00"';
assert (JSON.parse (str) === "\ud801\udc00\ud801\udc00\ud801\udc00\ud801\udc00");

str = '"\\ud801,\\udc00,\\ud801,\udc00,\ud801,\\udc00,\ud801,\udc00"';
assert (JSON.parse (str) === "\ud801,\udc00,\ud801,\udc00,\ud801,\udc00,\ud801,\udc00");

check_parse_error ('undefined');
check_parse_error ('falses');
check_parse_error ('+5');
check_parse_error ('5.');
check_parse_error ('01');
check_parse_error ('0x1');
check_parse_error ('0e-');
check_parse_error ('3e+a');
check_parse_error ('55e4,');
check_parse_error ('5 true');
check_parse_error ("'str'");
check_parse_error ('\x00');
check_parse_error ('"\x00"');
check_parse_error ('"\x1f"');


str = ' { "x": 0, "yy": null, "zzz": { "A": 4.0, "BB": { "1": 63e-1 }, "CCC" : false } } ';
result = JSON.parse (str);
assert (typeof result == "object");
assert (result.x === 0);
assert (result.yy === null);
assert (typeof result.zzz == "object");
assert (result.zzz.A === 4);
assert (typeof result.zzz.BB == "object");
assert (result.zzz.BB["1"] === 6.3);
assert (result.zzz.CCC === false);

check_parse_error ('{');
check_parse_error ('{{{}');
check_parse_error ('{x:5}');
check_parse_error ('{true:4}');
check_parse_error ('{"x":5 "y":6}');
check_parse_error ('{"x":5,"y":6,}');
check_parse_error ('{"x":5,,"y":6}');


str = '[{"x":[]},[[]],{}, [ null ] ]';
result = JSON.parse (str);
assert (result.length === 4);
assert (typeof result === "object");
assert (typeof result[0] === "object");
assert (typeof result[0].x === "object");
assert (result[0].x.length === 0);
assert (result[1].length === 1);
assert (result[1][0].length === 0);
assert (typeof result[2] === "object");
assert (result[3].length === 1);
assert (result[3][0] === null);

check_parse_error ('[');
check_parse_error ('[[[]');
check_parse_error ('[ true null ]');
check_parse_error ('[1,,2]');
check_parse_error ('[1,2,]');
check_parse_error ('[1] [2]');



assert (JSON.parse (null) == null);
assert (JSON.parse (true) == true);
assert (JSON.parse (3) == 3);

try {
  JSON.parse (undefined);
  
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}



object = { toString: function() { return false; } };
assert (JSON.parse (object) == false);

object = {"a": 3, "b": "foo"};
try {
  JSON.parse (object);
  
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}

array = [3, "foo"];
try {
  JSON.parse (array);
  
  assert (false);
} catch (e) {
  assert (e instanceof SyntaxError);
}

assert (JSON.parse (new Number (3)) == 3);
assert (JSON.parse (new Boolean (true)) == true);

object = new String ('{"a": 3, "b": "foo"}');
result = JSON.parse (object);

assert (result.a == 3);
assert (result.b == "foo");



function toStringReviver(k, v)
{
  log += "<" + k + ">:" + (typeof v == "number" ? v : "(obj)") + ", ";
  return v;
}

str = '{ "a":1, "b":2, "c": { "d":4, "e": { "f":6 } } }';
log = "";
JSON.parse (str, toStringReviver);
assert (log === "<a>:1, <b>:2, <d>:4, <f>:6, <e>:(obj), <c>:(obj), <>:(obj), ");

str = '[ 32, 47, 33 ]';
log = "";
JSON.parse (str, toStringReviver);
assert (log === "<0>:32, <1>:47, <2>:33, <>:(obj), ");



str = ' { "a":1, "b":2, "a":3 } ';
log = "";
JSON.parse (str, toStringReviver);
assert (log === "<a>:3, <b>:2, <>:(obj), ");

str = ' { "a":1, "b":2, "b":3 } ';
log = "";
JSON.parse (str, toStringReviver);
assert (log === "<a>:1, <b>:3, <>:(obj), ");

str = ' { "a":1, "b":{}, "b":[], "a":2, "b":3, "c":4 } ';
log = "";
JSON.parse (str, toStringReviver);
assert (log === "<a>:2, <b>:3, <c>:4, <>:(obj), ");



str = ' { "a":1, "b":2, "c":3 } ';
result = JSON.parse (str, function (k, v) {
  if (k == "a")
  {
    return 8;
  }
  if (k == "b")
  {
    return 9;
  }
  if (k == "c")
  {
    return void 0;
  }
  return v;
});

assert (result.a === 8);
assert (result.b === 9);
assert (result.c === void 0);



str = ' { "a":1, "b":2 } ';
log = "";
result = JSON.parse (str, function (k, v) {
  if (k == "a")
  {
    
    delete this["b"];
    
    this.c = 4;
  }
  if (k != "")
  {
    log += "<" + k + ">:" + v + " ";
  }
  return v;
});

assert (log === "<a>:1 <b>:undefined ");
assert (result.a === 1);
assert (result.b === void 0);
assert (result.c === 4);



str = ' { "a":1, "b":2, "c":3 } ';
log = "";
JSON.parse (str, function (k, v) {
  if (k == "a")
  {
    Object.defineProperty(this, "b", {
      enumerable: true,
      configurable: true,
      get: function() { return 12; }
    });
    Object.defineProperty(this, "c", {
      enumerable: true,
      configurable: true,
      set: function(val) { }
    });
  }
  if (k != "")
  {
    log += "<" + k + ">:" + v + " ";
  }
  return v;
});
assert (log === "<a>:1 <b>:12 <c>:undefined ");



str = ' { "a":1, "b":2 } ';
log = "";
JSON.parse (str, function (k, v) {
  if (k == "a")
  {
     this.b = { x:3, y:4 };
  }
  if (k != "")
  {
    log += "<" + k + ">:" + v + " ";
  }
  return v;
});
assert (log === "<a>:1 <x>:3 <y>:4 <b>:[object Object] ");



str = ' { "a":1, "b":2 } ';
result = JSON.parse (str, function (k, v) {
  if (k == "a")
  {
    Object.defineProperty(this, "b", {
      enumerable: true,
      
      configurable: false,
      writable: false,
      value: 2
    });
    return 8;
  }
  if (k == "b")
  {
    return 9;
  }
  return v;
});

assert (result.a === 8);
assert (result.b === 2);



try {
  str = ' { "a":1, "b":2 } ';
  result = JSON.parse (str, function (k, v) { throw new ReferenceError("error"); } );
  assert(false);
} catch (e) {
  assert (e.message === "error");
  assert (e instanceof ReferenceError);
}



try {
  str = ' { "a":1, "b":2 } ';
  JSON.parse (str, function (k, v) {
    if (k == "a")
    {
      Object.defineProperty(this, "b", {
        enumerable: true,
        configurable: true,
        get: function() { throw new ReferenceError("error"); }
      });
    }
    return v;
  });
  assert(false);
} catch (e) {
  assert (e.message === "error");
  assert (e instanceof ReferenceError);
}



str = ' { "a":1 } ';

result = JSON.parse (str, 4);
assert (result.a == 1);

result = JSON.parse (str, null);
assert (result.a == 1);

result = JSON.parse (str, undefined);
assert (result.a == 1);

result = JSON.parse (str, true);
assert (result.a == 1);

result = JSON.parse (str, "foo");
assert (result.a == 1);



str = ' { "a":1 } ';

result = JSON.parse(str, new Boolean (true));
assert (result.a == 1);

result = JSON.parse(str, new String ("foo"));
assert (result.a == 1);

result = JSON.parse(str, new Number (3));
assert (result.a == 1);

result = JSON.parse(str, {"a": 2});
assert (result.a == 1);

result = JSON.parse(str, [1, 2, 3]);
assert (result.a == 1);
