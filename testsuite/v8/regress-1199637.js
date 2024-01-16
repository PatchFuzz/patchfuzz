






























var NONE = 0;
var READ_ONLY = 1;

function AddNamedProperty(object, name, value, attrs) {
  Object.defineProperty(object, name, {
      value,
      configurable: true,
      enumerable: true,
      writable: (attrs & READ_ONLY) === 0
  });
}


AddNamedProperty(this.__proto__, "a", 1234, NONE);
assertEquals(1234, a);
eval("var a = 5678;");
assertEquals(5678, a);

AddNamedProperty(this.__proto__, "b", 1234, NONE);
assertEquals(1234, b);
eval("var b = 5678;");
assertEquals(5678, b);

AddNamedProperty(this.__proto__, "c", 1234, READ_ONLY);
assertEquals(1234, c);
eval("var c = 5678;");
assertEquals(5678, c);

AddNamedProperty(this.__proto__, "d", 1234, READ_ONLY);
assertEquals(1234, d);
eval("var d = 5678;");
assertEquals(5678, d);


AddNamedProperty(this.__proto__, "x", 1234, NONE);
assertEquals(1234, x);
eval("with({}) { var x = 5678; }");
assertEquals(5678, x);

AddNamedProperty(this.__proto__, "y", 1234, NONE);
assertEquals(1234, y);
eval("with({}) { var y = 5678; }");
assertEquals(5678, y);

AddNamedProperty(this.__proto__, "z", 1234, READ_ONLY);
assertEquals(1234, z);
eval("with({}) { var z = 5678; }");
assertEquals(5678, z);

AddNamedProperty(this.__proto__, "w", 1234, READ_ONLY);
assertEquals(1234, w);
eval("with({}) { var w = 5678; }");
assertEquals(5678, w);
