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


print(o.propertyIsEnumerable("a"));
print(o.propertyIsEnumerable("b"));
print(o.propertyIsEnumerable("1"));
print(o.propertyIsEnumerable("2"));


print(o.propertyIsEnumerable("c"));
print(o.propertyIsEnumerable("d"));
print(o.propertyIsEnumerable("3"));
print(o.propertyIsEnumerable("4"));


print(o.propertyIsEnumerable("f"));
print(o.propertyIsEnumerable("g"));
print(o.propertyIsEnumerable("11"));
print(o.propertyIsEnumerable("12"));


print(o.propertyIsEnumerable("h"));
print(o.propertyIsEnumerable("k"));
print(o.propertyIsEnumerable("13"));
print(o.propertyIsEnumerable("14"));


print(o.propertyIsEnumerable("xxx"));
print(o.propertyIsEnumerable("999"));


var o = Object("string");

o[10] = 42;
print(o.propertyIsEnumerable(10));
print(o.propertyIsEnumerable(0));


var o = [1,2,3,4,5];
print(o.propertyIsEnumerable(3));
