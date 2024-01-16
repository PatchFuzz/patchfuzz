





























var p = Object.create({}, {
  a : { value : 42, enumerable : true },
  b : { value : 42, enumerable : false },
  1 : { value : 42, enumerable : true },
  2 : { value : 42, enumerable : false },
  f : { get: function(){}, enumerable: true },
  g : { get: function(){}, enumerable: false },
  11 : { get: function(){}, enumerable: true },
  12 : { get: function(){}, enumerable: false }
});
var o = Object.create(p, {
  c : { value : 42, enumerable : true },
  d : { value : 42, enumerable : false },
  3 : { value : 42, enumerable : true },
  4 : { value : 42, enumerable : false },
  h : { get: function(){}, enumerable: true },
  k : { get: function(){}, enumerable: false },
  13 : { get: function(){}, enumerable: true },
  14 : { get: function(){}, enumerable: false }
});


assertFalse(o.propertyIsEnumerable("a"));
assertFalse(o.propertyIsEnumerable("b"));
assertFalse(o.propertyIsEnumerable("1"));
assertFalse(o.propertyIsEnumerable("2"));


assertTrue(o.propertyIsEnumerable("c"));
assertFalse(o.propertyIsEnumerable("d"));
assertTrue(o.propertyIsEnumerable("3"));
assertFalse(o.propertyIsEnumerable("4"));


assertFalse(o.propertyIsEnumerable("f"));
assertFalse(o.propertyIsEnumerable("g"));
assertFalse(o.propertyIsEnumerable("11"));
assertFalse(o.propertyIsEnumerable("12"));


assertTrue(o.propertyIsEnumerable("h"));
assertFalse(o.propertyIsEnumerable("k"));
assertTrue(o.propertyIsEnumerable("13"));
assertFalse(o.propertyIsEnumerable("14"));


assertFalse(o.propertyIsEnumerable("xxx"));
assertFalse(o.propertyIsEnumerable("999"));


var o = Object("string");

o[10] = 42;
assertTrue(o.propertyIsEnumerable(10));
assertTrue(o.propertyIsEnumerable(0));


var o = [1,2,3,4,5];
assertTrue(o.propertyIsEnumerable(3));
