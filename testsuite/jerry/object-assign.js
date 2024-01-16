













var object1 = {
  a: 1,
  b: 2,
  c: 3
};

var object2 = Object.assign ({c: 4, d: 5}, object1);

assert (JSON.stringify (object2) === '{"c":3,"d":5,"a":1,"b":2}');
assert (object2.c === 3);
assert (object2.d === 5);


var obj = { a: 1 };
var copy = Object.assign ({}, obj);
assert (JSON.stringify (copy) === '{"a":1}'); 


function deepClone() {
  'use strict';

  var obj1 = { a: 0 , b: { c: 0}};
  var obj2 = Object.assign ({}, obj1);
  assert (JSON.stringify (obj2) === '{"a":0,"b":{"c":0}}');

  obj1.a = 1;
  assert (JSON.stringify (obj1) === '{"a":1,"b":{"c":0}}');
  assert (JSON.stringify (obj2) === '{"a":0,"b":{"c":0}}');

  obj2.a = 2;
  assert (JSON.stringify (obj1) === '{"a":1,"b":{"c":0}}');
  assert (JSON.stringify (obj2) === '{"a":2,"b":{"c":0}}');

  obj2.b.c = 3;
  assert (JSON.stringify (obj1) === '{"a":1,"b":{"c":3}}');
  assert (JSON.stringify (obj2) === '{"a":2,"b":{"c":3}}');

  
  obj1 = { a: 0 , b: { c: 0}};
  var obj3 = JSON.parse (JSON.stringify (obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  assert (JSON.stringify (obj3) === '{"a":0,"b":{"c":0}}');
}

deepClone();


var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign (o1, o2, o3);
assert (JSON.stringify (obj) === '{"a":1,"b":2,"c":3}');
assert (JSON.stringify (o1) === '{"a":1,"b":2,"c":3}');  


var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign ({}, o1, o2, o3);
assert (JSON.stringify (obj) === '{"a":1,"b":2,"c":3}');


var obj = Object.create({ foo: 1 }, { 
  bar: {
    value: 2  
  },
  baz: {
    value: 3,
    enumerable: true  
  }
});

var copy = Object.assign ({}, obj);
assert (JSON.stringify (copy) === '{"baz":3}');


var v1 = 'abc';
var v2 = true;
var v3 = 10;

var obj = Object.assign ({}, v1, null, v2, undefined, v3);


assert (JSON.stringify (obj) === '{"0":"a","1":"b","2":"c"}');


var target = Object.defineProperty ({}, 'foo', {
  value: 1,
  writable: false
}); 

try {
  
  Object.assign (target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

assert (target.bar === 2);  
assert (target.foo2 === 3); 
assert (target.foo === 1);  
assert (target.foo3 === undefined); 
assert (target.baz === undefined);  


var obj = {
  foo: 1,
  get bar() {
    return 2;
  }
};

var copy = Object.assign ({}, obj);
assert (JSON.stringify (copy) === '{"foo":1,"bar":2}');
assert (copy.bar === 2); 


function completeAssign (target, sources) {
  sources.forEach (source => {
    var descriptors = Object.keys (source).reduce ((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor (source, key);
      return descriptors;
    }, {});

    Object.defineProperties (target, descriptors);
  });
  return target;
}

var copy = completeAssign ({}, [obj]);
assert (JSON.stringify (copy) === '{"foo":1,"bar":2}');
assert (copy.bar === 2);


try {
  Object.assign.call (undefined);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError)
}

var asd = Symbol ("asd");
var foo = Symbol ("foo");
var bar = Symbol ("bar");
var obj = {1: 5, "a": 6, [foo]: 7, [asd]: 8, [bar]: 9};
var result = Object.assign ({}, obj);
assert (result[foo] == 7);
assert (result[asd] == 8);
assert (result[bar] == 9);

obj = {}
assert(Object.assign(obj, { a:1, b:undefined, get c() {}, set d(v) {}}) == obj);
assert(Object.getOwnPropertyDescriptor(obj, "a").enumerable);
assert(Object.getOwnPropertyDescriptor(obj, "b").enumerable);
assert(Object.getOwnPropertyDescriptor(obj, "c").enumerable);
assert(Object.getOwnPropertyDescriptor(obj, "d").enumerable);
