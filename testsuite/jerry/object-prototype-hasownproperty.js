













var obj1 = {};
obj1.prop = "hi";

assert (obj1.hasOwnProperty('prop') === true);
assert (obj1.hasOwnProperty('NO_PROP') === false);



try {
  obj1.hasOwnProperty({toString: function() { throw new ReferenceError ("foo"); }});

  assert (false);
} catch (e) {
  assert (e.message === "foo");
  assert (e instanceof ReferenceError);
}



var obj2;
try {
  obj2.hasOwnProperty("fail");

  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}

var obj_undef;
var obj3 = {};
Object.defineProperty(obj3, 'Test', { 'get' : function () {throw new ReferenceError ("foo"); } });
assert (obj3.hasOwnProperty("Test") === true);

Object.defineProperty(obj3, 'Test2', { 'get' : function () { return 0/0; } });
assert (obj3.hasOwnProperty("Test2") === true);

Object.defineProperty(obj3, 'Test4', { 'get' : function () { return obj_undef; } });
assert (obj3.hasOwnProperty("Test4") === true);
