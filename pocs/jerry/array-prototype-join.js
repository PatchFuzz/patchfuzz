assert ([].join() === "");
assert ([1].join() === "1");
assert ([1, 2].join() === "1,2");


assert ([].join('--') === "");
assert ([1].join("--") === "1");
assert ([1, 2].join('--') === "1--2");

assert ([1,2,3].join({toString: function() { return "--"; }}) === "1--2--3");



var lst = [1,2,3,4];
lst.length = 3;
assert (lst.join() === [1,2,3].join());


var obj = {};
Object.defineProperty(obj, 'length', { 'get' : function () {throw new ReferenceError ("foo"); } });
obj.join = Array.prototype.join;

try {
  obj.join();
  
  assert (false);
} catch (e) {
  assert (e.message === "foo");
  assert (e instanceof ReferenceError);
}


try {
  [1,2,3].join({toString: function() { throw new ReferenceError ("foo"); }});
  
  assert (false);
} catch (e) {
  assert (e.message === "foo");
  assert (e instanceof ReferenceError);
}


try {
  [1, 2, {toString: function() { throw new ReferenceError ("foo"); }}, 4].join();
  
  assert (false);
} catch (e) {
  assert (e.message === "foo");
  assert (e instanceof ReferenceError);
}


var obj_2 = {};
obj_2.length = 3;
obj_2[0] = 1;
obj_2[1] = 2;
obj_2[2] = 3;
obj_2[3] = 4;

obj_2.join = Array.prototype.join;

assert (obj_2.join() === "1,2,3");


try {
  var f = function () { throw new TypeError("ooo");};
  var arr = [0, 1, 2, 3];
  Object.defineProperty(arr, '0', { 'get' : f });
  Array.prototype.join.call(arr);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
  assert(e.message == "ooo");
}
