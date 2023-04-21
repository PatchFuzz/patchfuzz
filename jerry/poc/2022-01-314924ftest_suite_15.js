













(function tc_15_02_01__004() {
  var a = 1;
  print(typeof Object(a) === 'object');
})();

(function tc_15_02_01__005() {
  var a = true;

  print(typeof Object(a) === 'object');
})();

(function tc_15_02_01__002() {
  var a;
  a = Object(null);

  print(typeof a === 'object');
})();

(function tc_15_02_01__003() {
  var a;
  a = Object(undefined);

  print(typeof a === 'object');
})();

(function tc_15_02_01__006() {
  var a = false;
  print(typeof Object(a) === 'object');
})();

(function tc_15_02_01__007() {
  var a = "some string";

  print(typeof Object(a) === 'object');
})();

(function tc_15_02_01__009() {
  var a = new Number(123.5);
  print(typeof Object(a) === 'object');
})();

(function tc_15_02_01__008() {
  var a = "some string";
  print(typeof Object(a) === 'object');
})();

(function tc_15_02_01__010() {
  var a = new String("nice string");
  print(typeof Object(a) === 'object');
})();

(function tc_15_02_01__001() {
  var a;
  a = Object();

  print(typeof a === 'object');
})();

(function tc_15_02_03__018() {
  var object = {
    prop1: Number,
    prop2: String,
    prop3: Boolean
  }

  Object.seal(object);

  check = delete object.prop1 || delete object.prop2 || delete object.prop3;

  object.prop4 = 3;

  check = check || Boolean(object.prop4);

  print(!check);
})();

(function tc_15_02_03__017() {
  var object = {
    prop1: "qwerty",
    prop2: 123,
  }

  Object.freeze(object);

  object.prop1 = "asdf";
  object.prop3 = true;

  print(!(object.prop1 === "asdf") && !delete object.prop2 && !object.prop3);
})();

(function tc_15_02_03__001() {
  print(typeof Object.getPrototypeOf(Object) == "function" &&
          Object.length == 1);
})();

(function tc_15_02_03__004() {
  var object = {
    prop1: Number,
    prop2: String,
    prop3: true,
    prop4: 0
  }

  var keys = Object.keys(object);

  print(keys[0] == "prop1" &&
          keys[1] == "prop2" &&
          keys[2] == "prop3" &&
          keys[3] == "prop4");

})();

(function tc_15_02_03__019() {
  var emptyObject = {}

  var properties = {
    prop1: {
      writable: true,
      enumerable: true,
      configurable: false,
      value: "I'm prop1"
    },
    prop2: {
      writable: true,
      enumerable: true,
      configurable: false,
      value: "I'm prop2"
    }
  }

  var isEnumerable = true;
  var isConfigurable = true;
  var isWritable = false;

  Object.defineProperties(emptyObject, properties);

  emptyObject.prop1 = "hello";
  emptyObject.prop2 = "world";

  if (emptyObject.prop1 === "hello" && emptyObject.prop2 == "world")
    isWritable = true;

  for (p in emptyObject) {
    if (emptyObject[p] === "hello")
      isEnumerable = !isEnumerable;
    else if (emptyObject[p] === "world")
      isEnumerable = !isEnumerable;
  }

  isConfigurable = delete emptyObject.prop1 && delete emptyObject.prop2

  print(isWritable && isEnumerable && !isConfigurable);
})();

(function tc_15_02_03__016() {
  var emptyObject = {}

  var propertyDescriptor = {
    enumerable: true,
    configurable: true,
    get: function () {
      return myProperty;
    },
    set: function (newValue) {
      myProperty = newValue;
    }
  }

  Object.defineProperty(emptyObject, 'myProperty', propertyDescriptor);

  var checkGetSet = false;
  var isEnumerable = false;
  var isConfigurable = false;

  emptyObject.myProperty = "foobar";
  if (emptyObject.myProperty == "foobar")
    checkGetSet = true;

  for (p in emptyObject) {
    if (emptyObject[p] == "foobar") {
      isEnumerable = true;
      break;
    }
  }

  if (delete emptyObject.myProperty)
    isConfigurable = true;

  print(checkGetSet && isEnumerable && isConfigurable);
})();

(function tc_15_02_03__010() {
  var a = new String("qwe");

  names = Object.getOwnPropertyNames(a);

  print(names instanceof Array);

  var is_0 = false, is_1 = false, is_2 = false, is_length = false;
  for (var i = 0; i <= 3; i++)
  {
    if (names[i] === "0") { is_0 = true; }
    if (names[i] === "1") { is_1 = true; }
    if (names[i] === "2") { is_2 = true; }
    if (names[i] === "length") { is_length = true; }
  }

  print(is_0 && is_1 && is_2 && is_length);
})();

(function tc_15_02_03__020() {
  var emptyObject = {}

  var propertyDescriptor = {
    enumerable: true,
    configurable: true,
    value: "hello!",
    writable: true
  }

  Object.defineProperty(emptyObject, 'myProperty', propertyDescriptor);

  var isWritable = false;
  var isEnumerable = false;
  var isConfigurable = false;

  emptyObject.myProperty = "foobar";
  if (emptyObject.myProperty == "foobar")
    isWritable = true;

  for (p in emptyObject) {
    if (emptyObject[p] == "foobar") {
      isEnumerable = true;
      break;
    }
  }

  if (delete emptyObject.myProperty)
    isConfigurable = true;

  print(isWritable && isEnumerable && isConfigurable);
})();

(function tc_15_02_03__003() {
  writable = false;
  enumerable = false;
  configurable = false;

  Object.prototype = "qwerty";
  if (Object.prototype === "qwerty")
    writable = true;

  for (prop in Object)
  {
    if (Object[prop] == "qwerty")
      enumerable = true;
  }

  if (delete Object.prototype)
    configurable = true;

  print(!writable && !enumerable && !configurable);
})();

(function tc_15_02_03__009() {
  var a = {
    prop1: Number,
    prop2: String,
    foo: function () {
      return 1;
    },
    bar: function () {
      return 0;
    }
  };
  names = Object.getOwnPropertyNames(a);

  print(names instanceof Array &&
          names[0] === "prop1" &&
          names[1] === "prop2" &&
          names[2] === "foo" &&
          names[3] === "bar");
})();

(function tc_15_02_03__013() {
  var niceObject = {
    niceProp1: String,
    niceProp2: Number,
    niceMeth: function () {
      return true;
    }
  }
  var someElseObject = {
    prop1: Boolean,
    prop2: Number
  }
  var niceChild = Object.create(niceObject, someElseObject);

  print(Object.getPrototypeOf(niceChild) === niceObject);
})();

(function tc_15_02_03__012() {
  var veryUsefulObject = {
  }

  Object.preventExtensions(veryUsefulObject);

  veryUsefulObject.property = "qwerty";

  veryUsefulObject.method = function () {
    return "asdf";
  }

  print(veryUsefulObject.property === undefined);
  print(veryUsefulObject.method === undefined);
})();

(function tc_15_02_03__008() {
  var object1 = {
    field1: 5,
    field2: "qwe",
    field3: true
  }

  var object2 = {
    field1: 5,
    field2: "qwe",
    field3: true
  }

  Object.freeze(object1);

  print(Object.isFrozen(object1) && !Object.isFrozen(object2));
})();

(function tc_15_02_03__021() {
  var emptyObject = {}

  var propertyDescriptor = {
    enumerable: true,
    configurable: true,
    value: "hello!",
    writable: true
  }

  Object.defineProperty(emptyObject, 'myProperty', propertyDescriptor);

  var newPropertyDescriptor = {
    enumerable: false,
    configurable: false,
    writable: false
  }

  Object.defineProperty(emptyObject, 'myProperty', newPropertyDescriptor);

  var isWritable = false;
  var isEnumerable = false;
  var isConfigurable = false;

  emptyObject.myProperty = "foobar";
  if (emptyObject.myProperty == "foobar")
    isWritable = true;

  for (p in emptyObject) {
    if (emptyObject[p] == "foobar") {
      isEnumerable = true;
      break;
    }
  }

  if (delete emptyObject.myProperty)
    isConfigurable = true;

  print(!isWritable && !isEnumerable && !isConfigurable);
})();

(function tc_15_02_03__007() {
  var a = {
    foo: function () {
      return 1
    }
  }
  desc = Object.getOwnPropertyDescriptor(a, "foo");

  print(desc instanceof Object);
})();

(function tc_15_02_03__002() {
  print(typeof Object.prototype == "object");
})();

(function tc_15_02_03__011() {
  var object1 = {
    field1: 5,
    field2: "qwe",
    field3: true
  }

  var object2 = {
    field1: 5,
    field2: "qwe",
    field3: true
  }

  Object.seal(object1);

  print(Object.isSealed(object1) && !Object.isSealed(object2));
})();

(function tc_15_02_03__014() {
  var a = new String("qwe");
  var someElseObject = {
    prop1: Boolean,
    prop2: Number
  }
  var niceChild = Object.create(a, someElseObject);

  print(Object.getPrototypeOf(niceChild) === a);
})();

(function tc_15_02_03__006() {
  var object1 = {
    field1: 5,
    field2: "qwe",
    field3: true
  }

  var object2 = {
    field1: 5,
    field2: "qwe",
    field3: true
  }

  Object.freeze(object1);

  print(!Object.isExtensible(object1) && Object.isExtensible(object2));
})();

(function tc_15_02_03__015() {
  var a = {}
  var someElseObject = undefined;
  var childObject = Object.create(a, someElseObject);

  print(Object.getPrototypeOf(childObject) === a && Object.getOwnPropertyNames(childObject).length == 0);
})();

(function tc_15_02_03__005() {
  var a = {
    field: Number
  }

  print(Object.getPrototypeOf(a) == Object.getPrototypeOf(Object()));
})();

(function tc_15_02_04__002() {
  print(Object.isExtensible(Object.getPrototypeOf(Object())));
})();

(function tc_15_02_04__001() {
  print(Object.getPrototypeOf(Object.getPrototypeOf(Object())) === null);
})();

(function tc_15_02_04_07__001() {
  var object = {
    prop: true
  }

  print(!object.propertyIsEnumerable('prop2'));
})();

(function tc_15_02_04_07__002() {
  var object = {}

  var propertyDescriptor = {
    enumerable: true,
    configurable: true,
    value: "qwe",
    writable: true
  }

  Object.defineProperty(object, 'prop', propertyDescriptor);

  print(object.propertyIsEnumerable('prop'));
})();

(function tc_15_02_04_07__003() {
  var object = {}

  var propertyDescriptor = {
    enumerable: false,
    configurable: true,
    value: "qwe",
    writable: true
  }

  Object.defineProperty(object, 'prop', propertyDescriptor);

  print(!object.propertyIsEnumerable('prop'));
})();

(function tc_15_02_04_04__007() {
  var a = false;

  print(a.valueOf() === false);
})();

(function tc_15_02_04_04__004() {
  var a = new Number(5);

  print(a.valueOf() === 5);
})();

(function tc_15_02_04_04__001() {
  var a = new Object();
  print(a.valueOf() === a);
})();

(function tc_15_02_04_04__003() {
  var a = {
    n: true,
    s: "qwerty"
  }

  print(a.valueOf() === a);
})();

(function tc_15_02_04_04__002() {
  var a = {
    n: Number(5)
  }
  print(a.valueOf() === a);
})();

(function tc_15_02_04_04__008() {
  var a = new String("qwe");
  print(a.valueOf() === "qwe");
})();

(function tc_15_02_04_04__009() {
  var a = "asdfgh";
  print(a.valueOf() === "asdfgh");
})();

(function tc_15_02_04_04__005() {
  var a = 123;

  print(a.valueOf() === 123);
})();

(function tc_15_02_04_04__010() {
  var a = "123";
  print(a.valueOf() === "123");
})();

(function tc_15_02_04_04__006() {
  var a = new Boolean(true);

  print(a.valueOf() === true);
})();

(function tc_15_02_04_02__003() {
  var obj = {};
  print(obj.toString() === "[object Object]");
})();

(function tc_15_02_04_02__001() {
  print(Object.prototype.toString.call(undefined) === "[object Undefined]");
})();

(function tc_15_02_04_02__002() {
  print(Object.prototype.toString.call(null) === "[object Null]");
})();

(function tc_15_02_04_02__004() {
  print(Object.prototype.toString.call(123) === "[object Number]");
})();

(function tc_15_02_04_05__002() {
  var obj = {
    prop1: 5
  }

  print(!obj.hasOwnProperty("prop5"));
})();

(function tc_15_02_04_05__004() {
  function Parent() {
    this.prop = 5;
  }

  function Child() {
    this.prop2 = false;
  }

  Child.prototype = Parent;

  var obj = new Child();

  print(obj.hasOwnProperty("prop2"));
})();

(function tc_15_02_04_05__003() {
  function Parent() {
    this.prop = 5;
  }

  function Child() {
    this.prop2 = false;
  }

  Child.prototype = Parent;

  var obj = new Child();

  print(!obj.hasOwnProperty("prop"));
})();

(function tc_15_02_04_05__001() {
  var obj = {
    prop1: 5,
    prop2: "qwe",
    prop3: Boolean
  }

  print(obj.hasOwnProperty("prop1"));
})();

(function tc_15_02_04_01__002() {
  print(Object.prototype.constructor === Object);
})();

(function tc_15_02_04_01__001() {
  print(Object.getPrototypeOf(Object()).constructor === Object);
})();

(function tc_15_02_04_03__003() {
  print(Object.toLocaleString() === Object.toString());
})();

(function tc_15_02_04_03__002() {
  var o = new Object();
  print(o.toLocaleString() === o.toString());

})();

(function tc_15_02_04_03__001() {
  print(typeof Object.prototype.toLocaleString === 'function');
})();

(function tc_15_02_04_06__001() {
  var a = new Object();
  var b = 123;

  print(!a.isPrototypeOf(b));
})();

(function tc_15_02_04_06__002() {
  var object = new Object();
  var p = Object.getPrototypeOf(object);

  print(p.isPrototypeOf(object));
})();

(function tc_15_02_04_06__006() {
  try
  {
    Object.prototype.isPrototypeOf.call(undefined, {});

    print(false);
  } catch (e)
  {
    print(e instanceof TypeError);
  }
})();

(function tc_15_02_04_06__003() {
  var object = new Object();
  var otherObject = new Object();

  print(!otherObject.isPrototypeOf(object));
})();

(function tc_15_02_04_06__005() {
  var object = Object.create(null);
  var temp = new Object();
  print(!temp.isPrototypeOf(object));
})();

(function tc_15_02_04_06__004() {
  var object = new Object();
  print(!object.isPrototypeOf(object));
})();

(function tc_15_02_02__009() {
  var a = new Object(null);
  print(typeof a === 'object' &&
          typeof (Object.getPrototypeOf(a)) === "object" &&
          Object.isExtensible(a));
})();

(function tc_15_02_02__002() {
  var a = new Object();
  var b = new Object();

  print(a !== b);
})();

(function tc_15_02_02__006() {
  var a = 5.5;
  var b = new Object(a);
  print(typeof b === "object" && b == a && b !== a);
})();

(function tc_15_02_02__004() {
  var a = {
    field1: Number,
    field2: String,
    foo: function () {
      return 0;
    }
  }
  var b = new Object(a);
  print(a === b);
})();

(function tc_15_02_02__008() {
  var a = new Object();
  print(typeof a === 'object' &&
          typeof (Object.getPrototypeOf(a)) === "object" &&
          Object.isExtensible(a));

})();

(function tc_15_02_02__010() {
  var a = new Object(undefined);
  print(typeof a === 'object' &&
          typeof (Object.getPrototypeOf(a)) === "object" &&
          Object.isExtensible(a));

})();

(function tc_15_02_02__007() {
  var a = true;
  var b = new Object(a);
  print(typeof b === "object" && b == a && b !== a);
})();

(function tc_15_02_02__005() {
  var a = "foobar";
  var b = new Object(a);
  print(typeof b === "object" && b == a && b !== a);
})();

(function tc_15_02_02__003() {
  var a = new Object();
  var b = new Object(a);
  print(a === b);
})();

(function tc_15_02_02__001() {
  var a = new Object();

  print(typeof a === 'object');
})();

(function tc_15_03_02_01__002() {
  try
  {
    Function('a', 'a', '"use strict";');
    print(false);
  }
  catch (e)
  {
  }
})();

(function tc_15_03_02_01__005() {
  "use strict";
  try
  {
    Function('eval', 'return;');

  }
  catch (e)
  {
    print(false);
  }
})();

(function tc_15_03_02_01__009() {
  "use strict";

  try
  {
    Function('arguments', 'return;');
  }
  catch (e)
  {
    print(false);
  }
})();

(function tc_15_03_02_01__004() {
  try
  {
    Function('eval', '"use strict";');
    print(false);
  }
  catch (e)
  {
  }
})();

(function tc_15_03_02_01__011() {
  "use strict";

  var foo = new Function("baz", "baz", "baz", "return 0;");

  print(foo() === 0);
})();

(function tc_15_03_02_01__001() {
  var func = new Function("a,b", "c", "return a+b+c")
  print(func(1, 2, 3) == 6);
})();

(function tc_15_03_02_01__010() {
  "use strict";

  var foo = new Function("baz", "qux", "baz", "return 0;");
})();

(function tc_15_03_02_01__008() {
  "use strict";

  try
  {
    Function('a,a', 'return a;');
  }
  catch (e)
  {
    print(false);
  }
})();

(function tc_15_03_02_01__007() {
  try
  {
    Function('a,a', '"use strict";');
    print(false);
  }
  catch (e)
  {
  }
})();

(function tc_15_03_02_01__012s() {
  "use strict";

  try
  {
    Function('a', 'a', 'return;');
  }
  catch (e)
  {
    print(false);
  }
})();

(function tc_15_03_04_02__005() {
  print(Function.prototype.toString.hasOwnProperty('length'));

  var obj = Function.prototype.toString.length;

  Function.prototype.toString.length = function () {
    return "shifted";
  };

  print(Function.prototype.toString.length === obj);
})();

(function tc_15_03_04_02__002() {
  var FACTORY = Function.prototype.toString;

  try
  {
    var instance = new FACTORY;
    print(false);
  }
  catch (e)
  {
  }
})();

(function tc_15_03_04_02__003() {
  print(Function.prototype.toString.hasOwnProperty('length'));
  print(!Function.prototype.toString.propertyIsEnumerable('length'));
  for (p in Function.prototype.toString)
  {
    print(p !== "length");
  }
})();

(function tc_15_03_04_02__006() {
  print(Function.prototype.toString.hasOwnProperty("length"));
  print(Function.prototype.toString.length === 0);

})();

(function tc_15_03_03__004() {
  print(Function.hasOwnProperty("length"));
  print(Function.length === 1);
})();

(function tc_15_03_03__002() {
  print(Function.prototype.isPrototypeOf(Function));
})();

(function tc_15_03_03__003() {
  Function.prototype.indicator = 1;
  print(Function.indicator === 1);
})();

(function tc_15_03_03__001() {
  print(Function.hasOwnProperty("prototype"));
})();

(function tc_15_03_03_01__001() {
  var obj = Function.prototype;
  Function.prototype = function () {
    return "shifted";
  };

  if (Function.prototype !== obj)
  {
    print(false);
  }

  try
  {
    if (Function.prototype() !== undefined)
    {
      print(false);
    }
  }
  catch (e)
  {
    print(false);
  }
})();

(function tc_15_03_03_01__002() {
  if (Function.propertyIsEnumerable('prototype'))
  {
    print(false);
  }

  var count = 0;

  for (p in Function)
  {
    if (p === "prototype")
      count++;
  }

  if (count !== 0)
  {
    print(false);
  }
})();

(function tc_15_03_03_01__003() {
  delete Function.prototype;

  if (!(Function.hasOwnProperty('prototype')))
  {
    print(false);
  }
})();

(function tc_15_03_03_01__004() {
  function foo() {
  }

  Object.defineProperty(foo, 'prototype', {value: {}});
  print(foo.prototype ===
          Object.getOwnPropertyDescriptor(foo, 'prototype').value);

})();

(function tc_15_07__001() {
  var a = Number;
  Number = null;
  var b = new a(5);
  Number = a;
  print(b !== 5);
})();

(function tc_15_07__002() {
  var a = Number;
  Number = null;
  var b = new a(5)
  Number = a;
  print(!(b === 5));
})();

(function tc_15_07_01__010() {
  var a = Number;
  Number = null;
  var b = a(2);
  Number = a;
  print(b === 2 && typeof b === "number");
})();

(function tc_15_07_01__002() {
  print(typeof Number("123456") === "number");
})();

(function tc_15_07_01__005() {
  print(Number() === +0);
})();

(function tc_15_07_01__006() {
  print(isNaN(Number(new Error())));
})();

(function tc_15_07_01__008() {
  print(isNaN(Number("abcdefg")));
})();

(function tc_15_07_01__004() {
  print(Number(753) === 753);
})();

(function tc_15_07_01__001() {
  print(Number("123456") === 123456);
})();

(function tc_15_07_01__007() {
  print(typeof Number("abcdefg") === "number");
})();

(function tc_15_07_01__003() {
  print(typeof Number(new Object()) === "number");
})();

(function tc_15_07_01__009() {
  print(isNaN(Number(function a() {return Infinity})));
})();

(function tc_15_07_02__011() {
  var a = new Number();
  print(a.valueOf() === +0.0);
})();

(function tc_15_07_02__004() {
  var a = Number
  Number = null
  var b = new a("1e12")
  Number = a;
  print(b.toString(35) === "fiyo05lf");
})();

(function tc_15_07_02__007() {
  ts = Number.prototype.toString
  delete Number.prototype.toString;
  var a = new Number()
  print(a.toString() === "[object Number]");
  Number.prototype.toString = ts;
})();

(function tc_15_07_02__001() {
  var a = new Number("123456");
  print((a == 123456) && (typeof a === 'object'));
})();

(function tc_15_07_02__006() {
  var a = Number
  Number = null
  var b = new a("1e12")
  b.c = new a(new a(777))
  Number = a;
  print(typeof b.c === "object" && b.c.valueOf() === 777)
})();

(function tc_15_07_02__003() {
  var a = Number
  Number = null
  var b = new a("1e12")
  Number = a;
  print(b == 1000000000000 && typeof b === "object");
})();

(function tc_15_07_02__005() {
  var a = Number
  Number = null
  var b = new a("1e12")
  b.c = new a(new Error())
  Number = a;

  print(typeof b.c === "object" && isNaN(b.c));
})();

(function tc_15_07_02__010() {
  var b = Number.prototype
  var a = Number
  Number = null
  var c = new a(5)
  Number = a;
  print(b === c.constructor.prototype);
})();

(function tc_15_07_02__009() {
  var a = new Number(null)
  print(Number.prototype === a.constructor.prototype);
})();

(function tc_15_07_02__002() {
  var a = new Number();
  print((a == +0.0) && (typeof a === 'object'));
})();

(function tc_15_07_02__008() {
  var a = new Number(null)
  print(Number.prototype.isPrototypeOf(a));
})();

(function tc_15_07_04__003() {
  print(Object.prototype.isPrototypeOf(Number.prototype));
})();

(function tc_15_07_04_01__002() {
  print(Number.prototype.constructor === Number);
})();

(function tc_15_07_04_01__001() {
  print(Number.prototype.hasOwnProperty('constructor'));
})();

(function tc_15_07_04_02__012() {
  print((new Number(Number.POSITIVE_INFINITY)).toString(undefined) === "Infinity");
})();

(function tc_15_07_04_02__011() {
  print((new Number(NaN)).toString(undefined) === "NaN")
})();

(function tc_15_07_04_02__005() {
  var a = -123456789012345
  print(a.toString(8) === "-3404420603357571");
})();

(function tc_15_07_04_02__003() {
  var a = new Number(15);
  print(a.toString(2) === "1111");
})();

(function tc_15_07_04_02__010() {
  print((new Number(NaN)).toString() === "NaN");
})();

(function tc_15_07_04_02__001() {
  var a = Number(0.1);
  print(a.toString(36) === "0.3lllllllllm");
})();

(function tc_15_07_04_02__013() {
  print((new Number(Number.NEGATIVE_INFINITY)).toString(undefined) === "-Infinity");
})();

(function tc_15_07_04_02__004() {
  var a = 123456789012345
  print(a.toString(8) === "3404420603357571");
})();

(function tc_15_07_04_02__009() {
  print(Number.prototype.hasOwnProperty('toString') &&
          typeof Number.prototype.toString === "function");
})();

(function tc_15_07_03__004() {
  var p = Object.getPrototypeOf(Number);
  print(p === Function.prototype);
})();

(function tc_15_07_03__002() {
  print(Number.hasOwnProperty("length") && Number.length === 1);
})();

(function tc_15_07_03__003() {
  print(Function.prototype.isPrototypeOf(Number) === true);
})();

(function tc_15_07_03__001() {
  print(Number.constructor.prototype === Function.prototype);
})();

(function tc_15_07_03_02__002() {
  print(Number.MAX_VALUE === 1.7976931348623157e308);
})();

(function tc_15_07_03_02__003() {
  print(Number.MAX_VALUE === 1.7976931348623157e308);
})();

(function tc_15_07_03_02__004() {
  var b = Number.MAX_VALUE;
  Number.MAX_VALUE = 0;
  print(Number.MAX_VALUE === b);
})();

(function tc_15_07_03_02__006() {
  for (x in Number)
  {
    if (x === "MAX_VALUE")
    {
      print(false);
    }
  }
})();

(function tc_15_07_03_02__005() {
  print(!(delete Number.MAX_VALUE));
})();

(function tc_15_07_03_02__001() {
  print(Number.hasOwnProperty("MAX_VALUE"));
})();

(function tc_15_07_03_01__001() {
  print(Number.hasOwnProperty("prototype"));
})();

(function tc_15_07_03_01__002() {
  var a = Object.getOwnPropertyDescriptor(Number, 'prototype');

  print((a.writable === false &&
          a.enumerable === false &&
          a.configurable === false));
})();

(function tc_15_07_03_01__003() {
  print(Object.getPrototypeOf(new Number()) === Number.prototype);
})();

(function tc_15_07_03_01__007() {
  for (x in Number)
  {
    if (x === "prototype")
    {
      print(false);
    }
  }
})();

(function tc_15_07_03_01__005() {
  print(delete Number.prototype === false)
})();

(function tc_15_07_03_01__006() {
  print(!Number.propertyIsEnumerable('prototype'));
})();

(function tc_15_07_03_06__001() {
  print(Number.hasOwnProperty("POSITIVE_INFINITY"));
})();

(function tc_15_07_03_06__006() {
  for (x in Number)
  {
    if (x === "POSITIVE_INFINITY")
    {
      print(false);
    }
  }
})();

(function tc_15_07_03_06__007() {
  print(!Number.propertyIsEnumerable('POSITIVE_INFINITY'));
})();

(function tc_15_07_03_06__003() {
  print(Number.POSITIVE_INFINITY === Infinity);
})();

(function tc_15_07_03_06__005() {
  print(!(delete Number.POSITIVE_INFINITY));
})();

(function tc_15_07_03_06__002() {
  print(!isFinite(Number.POSITIVE_INFINITY) && Number.POSITIVE_INFINITY > 0);
})();

(function tc_15_07_03_06__004() {
  var b = Number.POSITIVE_INFINITY
  Number.POSITIVE_INFINITY = 0
  print(Number.POSITIVE_INFINITY === b);
})();

(function tc_15_07_03_05__005() {
  print(!(delete Number.NEGATIVE_INFINITY));
})();

(function tc_15_07_03_05__006() {
  for (x in Number)
  {
    if (x === "NEGATIVE_INFINITY")
    {
      print(false);
    }
  }
})();

(function tc_15_07_03_05__007() {
  print(!Number.propertyIsEnumerable('NEGATIVE_INFINITY'));
})();

(function tc_15_07_03_05__003() {
  print(Number.NEGATIVE_INFINITY === -Infinity);
})();

(function tc_15_07_03_05__001() {
  print(Number.hasOwnProperty("NEGATIVE_INFINITY"));
})();

(function tc_15_07_03_05__002() {
  print(!(isFinite(Number.NEGATIVE_INFINITY) && Number.NEGATIVE_INFINITY < 0));
})();

(function tc_15_07_03_05__004() {
  var b = Number.NEGATIVE_INFINITY;
  Number.NEGATIVE_INFINITY = 0;
  print(Number.NEGATIVE_INFINITY === b);
})();

(function tc_15_07_03_04__001() {
  print(Number.hasOwnProperty("NaN"));
})();

(function tc_15_07_03_04__005() {
  print(!(delete Number.NaN));
})();

(function tc_15_07_03_04__003() {
  for (x in Number)
  {
    if (x === "NaN")
    {
      print(false);
    }
  }
})();

(function tc_15_07_03_04__004() {
  Number.NaN = 0;
  print(isNaN(Number.NaN));
})();

(function tc_15_07_03_04__002() {
  print(isNaN(Number.NaN));
})();

(function tc_15_07_03_03__001() {
  print(Number.hasOwnProperty("MIN_VALUE"));
})();

(function tc_15_07_03_03__005() {
  print(!(delete Number.MIN_VALUE));
})();

(function tc_15_07_03_03__003() {
  print(Number.MIN_VALUE === 5e-324);
})();

(function tc_15_07_03_03__006() {
  for (x in Number)
  {
    if (x === "MIN_VALUE")
    {
      print(false);
    }
  }
})();

(function tc_15_07_03_03__004() {
  var b = Number.MIN_VALUE
  Number.MIN_VALUE = 0
  print(Number.MIN_VALUE === b);
})();

(function tc_15_07_03_03__002() {
  print(Number.MIN_VALUE === 5e-324);
})();

(function tc_15_05_02_01__002() {
  var s = new String ("");
  s.x = 1;
  print(s.x === 1);
})();

(function tc_15_05_02_01__001() {
  print(String.prototype.isPrototypeOf(new String("")));
})();

(function tc_15_05_03_01__002() {
  for (var p in String) {
    if (p === String.prototype) {
      print(false);
    }
  }
})();

(function tc_15_05_03_01__001() {
  String.prototype = 1;
  print(String.prototype !== 1);
})();

(function tc_15_05_03_02__001() {
  print(String.fromCharCode () === "");
})();

(function tc_15_05_03_02__002() {
  print(String.fromCharCode (65, 66, 67) === "ABC");
})();

(function tc_15_05_01_01__005() {
  print(String (false) === "false");
})();

(function tc_15_05_01_01__008() {
  print(String (-0) === "0");
})();

(function tc_15_05_01_01__013() {
  print(String (0.111111111111111) === "0.111111111111111");
})();

(function tc_15_05_01_01__010() {
  print(String (Infinity) === "Infinity");
})();

(function tc_15_05_01_01__007() {
  print(String (+0) === "0");
})();

(function tc_15_05_01_01__009() {
  print(String (-1) === "-" + String (1));
})();

(function tc_15_05_01_01__012() {
  print(String (10000000000000000000) === "10000000000000000000");
})();

(function tc_15_05_01_01__006() {
  print(String(NaN) === "NaN");
})();

(function tc_15_05_01_01__001() {
  print(String () === String (""));
})();

(function tc_15_05_01_01__015() {
  print(String (0.000000111111111111111) === "1.11111111111111e-7");
})();

(function tc_15_05_01_01__004() {
  print(String (true) === "true");
})();

(function tc_15_05_01_01__014() {
  print(String (0.00000111111111111111) === "0.00000111111111111111");
})();

(function tc_15_05_01_01__002() {
  print(String (undefined) === "undefined");
})();

(function tc_15_05_01_01__003() {
  print(String (null) === "null");
})();

(function tc_15_05_01_01__011() {
  print(String (123000) === "123000");
})();

(function tc_15_05_04_07__001() {
  print(String("abcd").indexOf("ab") === 0);
})();

(function tc_15_05_04_07__002() {
  print(String("abcd").indexOf("ab", 0) === 0);
})();

(function tc_15_05_04_07__003() {
  print(String("abcd").indexOf("ab", 1) === -1);
})();

(function tc_15_05_04_01__001() {
  print(String.prototype.constructor === String);
})();

(function tc_15_05_04_05__001() {
  print(isNaN(String("abc").charCodeAt(-1)));
})();

(function tc_15_05_04_05__002() {
  print(isNaN(String("abc").charCodeAt(3)));
})();

(function tc_15_05_04_05__004() {
  print(String("abc").charCodeAt("0") === 97);
})();

(function tc_15_05_04_05__003() {
  print(String("abc").charCodeAt(0) === 97);
})();

(function tc_15_05_04_03__001() {
  print(String ("abc").valueOf () === "abc");
})();

(function tc_15_05_04_02__001() {
  print(String ("abc").toString () === "abc");
})();

(function tc_15_05_04_02__002() {
  print("abc".toString () === "abc");
})();

(function tc_15_05_04_04__003() {
  print(String("abc").charAt(0) === "a");
})();

(function tc_15_05_04_04__004() {
  print(String("abc").charAt("0") === "a");
})();

(function tc_15_05_04_04__001() {
  print(String("abc").charAt(-1) === "");
})();

(function tc_15_05_04_04__002() {
  print(String("abc").charAt(3) === "");
})();

(function tc_15_05_04_06__004() {
  print(String ().concat.length === 1);
})();

(function tc_15_05_04_06__001() {
  print(String("abc").concat("d") === "abcd");
})();

(function tc_15_05_04_06__003() {
  print(String().concat("a", "b", "c") === "abc");
})();

(function tc_15_05_04_06__002() {
  print(String().concat() === "");
})();

(function tc_15_08_02_06__011() {
  print(isNaN(Math.ceil("NaN")));
})();

(function tc_15_08_02_06__007() {
  print(Math.ceil(-1.3) === -1);
})();

(function tc_15_08_02_06__006() {
  print(1/Math.ceil(-0.3) === -Infinity);
})();

(function tc_15_08_02_06__012() {
  print(isNaN(Math.ceil(new Object())));
})();

(function tc_15_08_02_06__003() {
  print(1/Math.ceil(-0) === -Infinity);
})();

(function tc_15_08_02_06__010() {
  print(Math.ceil(1.1) === 2);
})();

(function tc_15_08_02_06__004() {
  print(Math.ceil(-Infinity) === -Infinity);
})();

(function tc_15_08_02_06__009() {
  print(Math.ceil(1.9) === 2);
})();

(function tc_15_08_02_06__008() {
  print(Math.ceil(-1.9) === -1);
})();

(function tc_15_08_02_06__005() {
  print(Math.ceil(Infinity) === Number.POSITIVE_INFINITY);
})();

(function tc_15_08_02_06__002() {
  var res = 1 / Math.ceil(+0)
  print(res === +Infinity && res !== -Infinity);
})();

(function tc_15_08_02_06__001() {
  print(isNaN(Math.ceil(NaN)));
})();

(function tc_15_08_02_16__005() {
  print(isNaN(Math.sin(-Infinity)));
})();

(function tc_15_08_02_16__001() {
  print(isNaN(Math.sin(NaN)));
})();

(function tc_15_08_02_16__003() {
  print(1/Math.sin(-0) === -Infinity);
})();

(function tc_15_08_02_16__004() {
  print(isNaN(Math.sin(Infinity)));
})();

(function tc_15_08_02_16__002() {
  print(1/Math.sin(+0) === Infinity);
})();

(function tc_15_08_02_03__009() {
  print(Math.asin(1) === Math.PI / 2);
})();

(function tc_15_08_02_03__007() {
  print(Math.asin(+0) === +0);
})();

(function tc_15_08_02_03__004() {
  print(!isNaN(Math.asin(-1.0000000000000001)));
})();

(function tc_15_08_02_03__005() {
  print(isNaN(Math.asin(-1.000000000000001)));
})();

(function tc_15_08_02_03__003() {
  print(!isNaN(Math.asin(1.0000000000000001)));
})();

(function tc_15_08_02_03__008() {
  print(Math.asin(-0) === -0);
})();

(function tc_15_08_02_03__006() {
  print(isNaN(Math.asin(-3)));
})();

(function tc_15_08_02_03__001() {
  print(isNaN(Math.asin(NaN)));
})();

(function tc_15_08_02_03__002() {
  print(isNaN(Math.asin(1.000000000000001)));
})();

(function tc_15_08_02_17__003() {
  print(1/Math.sqrt(+0) === Infinity);
})();

(function tc_15_08_02_17__005() {
  print(Math.sqrt(Infinity) === Infinity);
})();

(function tc_15_08_02_17__004() {
  print(1/Math.sqrt(-0) === -Infinity);
})();

(function tc_15_08_02_17__002() {
  print(isNaN(Math.sqrt(-2)));
})();

(function tc_15_08_02_17__001() {
  print(isNaN(Math.sqrt(NaN)));
})();

(function tc_15_08_02_01__002() {
  print(Math.abs(-0.0) === +0.0);
})();

(function tc_15_08_02_01__001() {
  print(isNaN(Math.abs(NaN)));
})();

(function tc_15_08_02_01__005() {
  print(Math.abs(-123513745) === 123513745);
})();

(function tc_15_08_02_01__003() {
  print(Math.abs(Number.NEGATIVE_INFINITY) === Number.POSITIVE_INFINITY);
})();

(function tc_15_08_02_01__004() {
  print(Math.abs(Number.NEGATIVE_INFINITY) === Number.POSITIVE_INFINITY);
})();

(function tc_15_08_02_11__004() {
  print(isNaN(Math.max(NaN)));
})();

(function tc_15_08_02_11__012() {
  print(typeof Math.max === "function");
})();

(function tc_15_08_02_11__009() {
  print(Math.max() === -Infinity);
})();

(function tc_15_08_02_11__003() {
  print(isNaN(Math.max(Object())));
})();

(function tc_15_08_02_11__011() {
  print(Math.max(+0, -0) === +0);
})();

(function tc_15_08_02_11__006() {
  print(isNaN(Math.max(5, -7, NaN)));
})();

(function tc_15_08_02_11__001() {
  print(isNaN(Math.max(undefined)));
})();

(function tc_15_08_02_11__002() {
  print(isNaN(Math.max({})));
})();

(function tc_15_08_02_11__010() {
  print(Math.max() !== Infinity);
})();

(function tc_15_08_02_11__014() {
  print(1/Math.max(-0, +0) === Infinity);
})();

(function tc_15_08_02_11__005() {
  print(isNaN(Math.max(5, 7, NaN)));
})();

(function tc_15_08_02_11__008() {
  print(!isFinite(Math.max()));
})();

(function tc_15_08_02_11__007() {
  print(Math.max(5, -7) === 5);
})();

(function tc_15_08_02_11__013() {
  print(Math.max.length === 2);
})();

(function tc_15_08_02_07__003() {
  print(Math.cos(+0) === 1);
})();

(function tc_15_08_02_07__006() {
  print(isNaN(Math.cos(-Infinity)));
})();

(function tc_15_08_02_07__001() {
  print(isNaN(Math.cos(NaN)));
})();

(function tc_15_08_02_07__004() {
  print(Math.cos(-0) === 1);
})();

(function tc_15_08_02_07__007() {
  print(Math.cos(Math.PI) === -1);
})();

(function tc_15_08_02_07__002() {
  print(isNaN(Math.cos("   NaN")));
})();

(function tc_15_08_02_07__005() {
  print(isNaN(Math.cos(Infinity)));
})();

(function tc_15_08_02_10__002() {
  print(isNaN(Math.log(-0.00001)));
})();

(function tc_15_08_02_10__004() {
  print(Math.log(-0) === -Infinity);
})();

(function tc_15_08_02_10__001() {
  print(isNaN(Math.log(NaN)));
})();

(function tc_15_08_02_10__005() {
  print(1/Math.log(1) === Infinity);
})();

(function tc_15_08_02_10__003() {
  print(Math.log(+0) === -Infinity);
})();

(function tc_15_08_02_10__006() {
  print(Math.log(Infinity) === Infinity);
})();

(function tc_15_08_02_13__029() {
  print(Math.pow(2,2) === 4);
})();

(function tc_15_08_02_13__022() {
  print(1/Math.pow(+0, 5.2) === Infinity);
})();

(function tc_15_08_02_13__010() {
  print(isNaN(Math.pow(1, Infinity)));
})();

(function tc_15_08_02_13__023() {
  print(Math.pow(+0, -5.2) === Infinity);

})();

(function tc_15_08_02_13__017() {
  print(1/Math.pow(Infinity, -3) === Infinity);
})();

(function tc_15_08_02_13__024() {
  print(1/Math.pow(-0, 12) === Infinity);
})();

(function tc_15_08_02_13__031() {
  print(isNaN(Math.pow(1, NaN)));
})();

(function tc_15_08_02_13__007() {
  print(1/Math.pow(5, -Infinity) === Infinity);
})();

(function tc_15_08_02_13__027() {
  print(Math.pow(-0, -1) === -Infinity);
})();

(function tc_15_08_02_13__014() {
  print(1 / Math.pow(0.3, Infinity) === Infinity);
})();

(function tc_15_08_02_13__003() {
  print(Math.pow(NaN, +0, 5, "qeqegfhb") === 1);
})();

(function tc_15_08_02_13__002() {
  print(Math.pow(2, +0, 5, "qeqegfhb") === 1);
})();

(function tc_15_08_02_13__009() {
  print(Math.pow(-5, Infinity) === Infinity);
})();

(function tc_15_08_02_13__021() {
  print(1/Math.pow(-Infinity, -5) === -Infinity);
})();

(function tc_15_08_02_13__001() {
  print(isNaN(Math.pow(2, "NaN", 5)));
})();

(function tc_15_08_02_13__025() {
  print(1/Math.pow(-0, 7) === -Infinity);
})();

(function tc_15_08_02_13__012() {
  print(isNaN(Math.pow(-1, -Infinity)));
})();

(function tc_15_08_02_13__016() {
  print(Math.pow(Infinity, 3) === Infinity);
})();

(function tc_15_08_02_13__013() {
  print(isNaN(Math.pow(1, -Infinity)));
})();

(function tc_15_08_02_13__011() {
  print(isNaN(Math.pow(-1, Infinity)));
})();

(function tc_15_08_02_13__015() {
  print(Math.pow(-0.3, -Infinity) === Infinity);
})();

(function tc_15_08_02_13__028() {
  print(isNaN(Math.pow(-174, 1.78)));
})();

(function tc_15_08_02_13__008() {
  print(1/Math.pow(-5, -Infinity) === Infinity);
})();

(function tc_15_08_02_13__006() {
  print(Math.pow(5, Infinity) === Infinity);
})();

(function tc_15_08_02_13__026() {
  print(Math.pow(-0, -100) === Infinity);
})();

(function tc_15_08_02_13__004() {
  print(Math.pow("qeqegfhb", -0) === 1);
})();

(function tc_15_08_02_13__030() {
  print(Math.pow("2   ","2.0") === 4);
})();

(function tc_15_08_02_13__005() {
  print(isNaN(Math.pow("qeqegfhb", 1)));
})();

(function tc_15_08_02_13__020() {
  print(1/Math.pow(-Infinity, -6) === Infinity);
})();

(function tc_15_08_02_13__019() {
  print(Math.pow(-Infinity, 5) === -Infinity);
})();

(function tc_15_08_02_13__018() {
  print(Math.pow(-Infinity, 6) === Infinity);
})();

(function tc_15_08_02_15__006() {
  print(1/Math.round(0.2) === Infinity);
})();

(function tc_15_08_02_15__003() {
  print(1/Math.round(-0) === -Infinity);
})();

(function tc_15_08_02_15__007() {
  print(1/Math.round(-0.3) === -Infinity);
})();

(function tc_15_08_02_15__005() {
  print(Math.round(-Infinity) === -Infinity);
})();

(function tc_15_08_02_15__001() {
  print(isNaN(Math.round(NaN)));
})();

(function tc_15_08_02_15__004() {
  print(Math.round(Infinity) === Infinity);
})();

(function tc_15_08_02_15__002() {
  print(1/Math.round(+0) === Infinity);
})();

(function tc_15_08_02_05__003() {
  print(Math.atan2(Number.MIN_VALUE, +0) === Math.PI / 2);
})();

(function tc_15_08_02_05__020() {
  print(Math.atan2(-Number.MAX_VALUE, Number.POSITIVE_INFINITY) === -0);
})();

(function tc_15_08_02_05__019() {
  print(Math.atan2(Number.MAX_VALUE, -Infinity) === Math.PI);
})();

(function tc_15_08_02_05__008() {
  print(Math.atan2(+0, -0) === Math.PI);
})();

(function tc_15_08_02_05__029() {
  print(Math.atan2(-Infinity, -Infinity) === -3*Math.PI / 4);
})();

(function tc_15_08_02_05__016() {
  print(Math.atan2(-99999999, +0) === -Math.PI/2);
})();

(function tc_15_08_02_05__028() {
  print(Math.atan2(-Infinity, +Infinity) === -Math.PI / 4);
})();

(function tc_15_08_02_05__007() {
  print(Math.atan2(+0, +0) === +0);
})();

(function tc_15_08_02_05__006() {
  print(Math.atan2(+0, Number.MAX_VALUE) === +0);
})();

(function tc_15_08_02_05__009() {
  print(Math.atan2(+0, -Number.MIN_VALUE) === Math.PI);
})();

(function tc_15_08_02_05__025() {
  print(Math.atan2(-Infinity, -999999999) === -Math.PI / 2);
})();

(function tc_15_08_02_05__014() {
  print(Math.atan2(-0, -Number.MIN_VALUE) === -Math.PI);
})();

(function tc_15_08_02_05__026() {
  print(Math.atan2(Infinity, Infinity) === Math.PI / 4);
})();

(function tc_15_08_02_05__023() {
  print(Math.atan2(Infinity, -1) === Math.PI / 2);
})();

(function tc_15_08_02_05__024() {
  print(Math.atan2(-Infinity, -1) === -Math.PI / 2);
})();

(function tc_15_08_02_05__011() {
  print(Math.atan2(-0, Infinity) === -0);
})();

(function tc_15_08_02_05__010() {
  print(Math.atan2(+0, -Infinity) === Math.PI);
})();

(function tc_15_08_02_05__015() {
  print(Math.atan2(-0, -Infinity) === -Math.PI);
})();

(function tc_15_08_02_05__004() {
  print(!(Math.atan2(0, +0) === Math.PI / 2));
})();

(function tc_15_08_02_05__021() {
  print(Math.atan2(-Number.MIN_VALUE, Number.NEGATIVE_INFINITY) === -Math.PI);
})();

(function tc_15_08_02_05__022() {
  print(Math.atan2(Infinity, 1) === Math.PI / 2);
})();

(function tc_15_08_02_05__013() {
  print(Math.atan2(-0, -0) === -Math.PI);
})();

(function tc_15_08_02_05__027() {
  print(Math.atan2(Infinity, -Infinity) === 3*Math.PI / 4);
})();

(function tc_15_08_02_05__001() {
  print(isNaN(Math.atan2(NaN, 1)));
})();

(function tc_15_08_02_05__002() {
  print(isNaN(Math.atan2(1, NaN)));
})();

(function tc_15_08_02_05__017() {
  print(Math.atan2(-99999999, -0) === -Math.PI/2);
})();

(function tc_15_08_02_05__005() {
  print(Math.atan2(1, -0) === Math.PI / 2);
})();

(function tc_15_08_02_05__018() {
  print(Math.atan2(1, Infinity) === +0);
})();

(function tc_15_08_02_05__012() {
  print(Math.atan2(-0, +0) === -0);
})();

(function tc_15_08_02_02__002() {
  print(!isNaN(Math.acos(1.00000000000000000000001)));
})();

(function tc_15_08_02_02__003() {
  print(isNaN(Math.acos(Number.NEGATIVE_INFINITY)));
})();

(function tc_15_08_02_02__005() {
  print(isNaN(Math.acos(1.000000000000001)));
})();

(function tc_15_08_02_02__004() {
  print(Math.acos(1) === +0.0);
})();

(function tc_15_08_02_02__006() {
  print(isNaN(Math.acos(-7)));
})();

(function tc_15_08_02_02__001() {
  print(isNaN(Math.acos(NaN)));
})();

(function tc_15_08_02_12__010() {
  print(Math.min() !== -Infinity);
})();

(function tc_15_08_02_12__013() {
  print(Math.min.length === 2);
})();

(function tc_15_08_02_12__012() {
  print(typeof Math.min === "function");
})();

(function tc_15_08_02_12__014() {
  print(1/Math.min(+0, -0) === -Infinity);
})();

(function tc_15_08_02_12__005() {
  print(isNaN(Math.min(5, 7, NaN)));
})();

(function tc_15_08_02_12__001() {
  print(isNaN(Math.min(undefined)));
})();

(function tc_15_08_02_12__002() {
  print(isNaN(Math.min({})));
})();

(function tc_15_08_02_12__008() {
  print(!isFinite(Math.min()));
})();

(function tc_15_08_02_12__003() {
  print(isNaN(Math.min(Object())));
})();

(function tc_15_08_02_12__009() {
  print(Math.min() === Infinity);
})();

(function tc_15_08_02_12__004() {
  print(isNaN(Math.min(NaN)));
})();

(function tc_15_08_02_12__007() {
  print(Math.min(5, -7) === -7);
})();

(function tc_15_08_02_12__006() {
  print(isNaN(Math.min(5, -7, NaN)));
})();

(function tc_15_08_02_12__011() {
  print(Math.min(+0, -0) === +0);
})();

(function tc_15_08_02_18__007() {
  print(isNaN(Math.tan(undefined)));
})();

(function tc_15_08_02_18__001() {
  print(isNaN(Math.tan(NaN)));
})();

(function tc_15_08_02_18__006() {
  print(1/Math.tan(-0, NaN) === -Infinity);
})();

(function tc_15_08_02_18__005() {
  print(1/Math.tan(-0) === -Infinity);
})();

(function tc_15_08_02_18__002() {
  print(isNaN(Math.tan(Infinity)));
})();

(function tc_15_08_02_18__003() {
  print(isNaN(Math.tan(-Infinity)));
})();

(function tc_15_08_02_18__004() {
  print(1/Math.tan(+0) === Infinity);
})();

(function tc_15_08_02_04__002() {
  print(isNaN(Math.atan(undefined)));
})();

(function tc_15_08_02_04__006() {
  print(Math.atan(Infinity) === Math.PI / 2);
})();

(function tc_15_08_02_04__008() {
  print(Math.atan(Number.NEGATIVE_INFINITY) === -Math.PI / 2);
})();

(function tc_15_08_02_04__003() {
  print(isNaN(Math.atan({})));
})();

(function tc_15_08_02_04__007() {
  print(Math.atan(Number.POSITIVE_INFINITY) === Math.PI / 2);
})();

(function tc_15_08_02_04__004() {
  print(Math.atan(+0) === +0);
})();

(function tc_15_08_02_04__001() {
  print(isNaN(Math.atan(NaN)));
})();

(function tc_15_08_02_04__009() {
  print(Math.atan(-1) === -Math.PI / 4);
})();

(function tc_15_08_02_04__005() {
  print(Math.atan(-0) === -0);
})();

(function tc_15_08_02_09__001() {
  print(isNaN(Math.floor(NaN)));
})();

(function tc_15_08_02_09__006() {
  print(1/Math.floor(0.2) === Infinity);
})();

(function tc_15_08_02_09__008() {
  print(Math.floor(1.9) === -Math.ceil(-1.9));
})();

(function tc_15_08_02_09__007() {
  print(Math.floor(1.2) === -Math.ceil(-1.2));
})();

(function tc_15_08_02_09__002() {
  print(1/Math.floor(+0) === Infinity);
})();

(function tc_15_08_02_09__003() {
  print(1/Math.floor(-0) === -Infinity);
})();

(function tc_15_08_02_09__005() {
  print(Math.floor(-Infinity) === -Infinity);
})();

(function tc_15_08_02_09__004() {
  print(Math.floor(Infinity) === Infinity);
})();

(function tc_15_08_02_08__004() {
  print(Math.exp(Infinity) === Infinity);
})();

(function tc_15_08_02_08__002() {
  print(Math.exp(+0) === 1);
})();

(function tc_15_08_02_08__003() {
  print(Math.exp(-0) === 1);
})();

(function tc_15_08_02_08__001() {
  print(isNaN(Math.exp(NaN)));
})();

(function tc_15_08_02_08__006() {
  print(1/Math.exp(-Infinity) === Infinity);
})();

(function tc_15_08_02_08__005() {
  print(Math.exp(Infinity) === Infinity);
})();

(function tc_15_06_01_01__005() {
  print(false === Boolean(+0));
})();

(function tc_15_06_01_01__011() {
  print(true === Boolean("abcdef"));
})();

(function tc_15_06_01_01__012() {
  print(true === Boolean({}));
})();

(function tc_15_06_01_01__002() {
  print(false === Boolean(null));
})();

(function tc_15_06_01_01__007() {
  print(false === Boolean(NaN));
})();

(function tc_15_06_01_01__001() {
  print(false === Boolean(undefined));
})();

(function tc_15_06_01_01__004() {
  print(true === Boolean(true));
})();

(function tc_15_06_01_01__009() {
  print(true === Boolean(-11111));
})();

(function tc_15_06_01_01__003() {
  print(false === Boolean(false));
})();

(function tc_15_06_01_01__010() {
  print(false === Boolean(""));
})();

(function tc_15_06_01_01__006() {
  print(false === Boolean(-0));
})();

(function tc_15_06_01_01__008() {
  print(true === Boolean(11111));
})();

(function tc_15_06_02_01__002() {
  var b = new Boolean (true);
  b.x = 1;
  print(b.x === 1);
})();

(function tc_15_06_02_01__001() {
  print(Boolean.prototype.isPrototypeOf(new Boolean(true)));
})();

(function tc_15_06_04_03__001() {
  print(Boolean(false).valueOf() === false);
})();

(function tc_15_06_04_02__003() {
  print(true.toString() === "true");
})();

(function tc_15_06_04_02__001() {
  print(Boolean(true).toString() === "true");
})();

(function tc_15_06_04_02__002() {
  print(Boolean(false).toString() === "false");
})();

(function tc_15_06_04_01__001() {
  print(Boolean.prototype.constructor === Boolean);
})();

(function tc_15_06_03_01__001() {
  for (var p in Boolean) {
    if (p === Boolean.prototype) {
      print(false);
    }
  }
})();

(function tc_15_04_02_02__007() {
  var a = new Array("5");
  print(a.length === 1);
})();

(function tc_15_04_02_02__003() {
  var a = new Array(5);
  print(a[0] === undefined);
})();

(function tc_15_04_02_02__008() {
  var a = new Array("55");
  print(a[0] === "55");
})();

(function tc_15_04_02_02__005() {
  var a = new Array(5);
  print(a[10] === undefined);
})();

(function tc_15_04_02_02__002() {
  var a = new Array(5);
  print(a.length === 5);
})();

(function tc_15_04_02_02__006() {
  var a = new Array(0);
  print(a.length === 0);
})();

(function tc_15_04_02_02__004() {
  var a = new Array(5);
  print(a[3] === undefined);
})();

(function tc_15_04_02_02__001() {
  var a = new Array(5);
  print(typeof a === 'object');
})();

(function tc_15_04_02_01__001() {
  var a = new Array();
  print(typeof a === 'object');
})();

(function tc_15_04_02_01__004() {
  var a = new Array(1, 2, 5);
  print(a[1] === 2);
})();

(function tc_15_04_02_01__003() {
  var a = new Array(1, 2, 5);
  print(a[0] === 1);
})();

(function tc_15_04_02_01__008() {
  var a = new Array();
  print(a[0] === undefined);
})();

(function tc_15_04_02_01__005() {
  var a = new Array(1, 2, 5);
  print(a[2] === 5);
})();

(function tc_15_04_02_01__007() {
  var a = new Array();
  print(a.length === 0);
})();

(function tc_15_04_02_01__006() {
  var a = new Array(1, 2, 5);
  print(a[3] === undefined);
})();

(function tc_15_04_02_01__002() {
  var a = new Array(1, 2, 5);
  print(a.length === 3);
})();

(function tc_15_03_04_02__001() {
  print(Function.prototype.toString.hasOwnProperty('length'));
  print(delete Function.prototype.toString.length);
  print(!Function.prototype.toString.hasOwnProperty('length'));
})();
