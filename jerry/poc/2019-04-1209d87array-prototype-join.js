













print([].join() === "");
print([1].join() === "1");
print([1, 2].join() === "1,2");


print([].join('--') === "");
print([1].join("--") === "1");
print([1, 2].join('--') === "1--2");

print([1,2,3].join({toString: function() { return "--"; }}) === "1--2--3");



var lst = [1,2,3,4];
lst.length = 3;
print(lst.join() === [1,2,3].join());


var obj = {};
Object.defineProperty(obj, 'length', { 'get' : function () {throw new ReferenceError ("foo"); } });
obj.join = Array.prototype.join;

try {
  obj.join();
  
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


try {
  [1,2,3].join({toString: function() { throw new ReferenceError ("foo"); }});
  
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


try {
  [1, 2, {toString: function() { throw new ReferenceError ("foo"); }}, 4].join();
  
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var obj_2 = {};
obj_2.length = 3;
obj_2[0] = 1;
obj_2[1] = 2;
obj_2[2] = 3;
obj_2[3] = 4;

obj_2.join = Array.prototype.join;

print(obj_2.join() === "1,2,3");


try {
  var f = function () { throw new TypeError("ooo");};
  var arr = [0, 1, 2, 3];
  Object.defineProperty(arr, '0', { 'get' : f });
  Array.prototype.join.call(arr);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
  print(e.message == "ooo");
}
