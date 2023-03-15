













var array = ["foo", [], Infinity, 4]
print(array.length === 4);

print(array.pop() === 4)
print(array.length === 3);

print(array.pop() === Infinity);
print(array.length === 2);

var a = array.pop()
print(a instanceof Array);
print(array.length === 1);

print(array.pop() === "foo");
print(array.length === 0);

print(array.pop() === undefined);
print(array.length === 0);


var obj = { pop : Array.prototype.pop };
Object.defineProperty(obj, 'length', { 'get' : function () {throw new ReferenceError ("foo"); } });

try {
  obj.pop();
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var obj = { pop : Array.prototype.pop };
Object.defineProperty(obj, 'length', { 'set' : function () {throw new ReferenceError ("foo"); } });

try {
  obj.pop();
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var obj = { pop : Array.prototype.pop };
print(obj.length === undefined)
print(obj.pop() === undefined)
print(obj.length === 0)


var obj = { pop : Array.prototype.pop, length : 1 };
Object.defineProperty(obj, '0', { 'get' : function () {throw new ReferenceError ("foo"); } });

try {
  obj.pop();
  print(false);
} catch (e) {
  print(e.message === "foo");
  print(e instanceof ReferenceError);
}


var obj = {pop : Array.prototype.pop, length : 2};
Object.defineProperty(obj, '1', function () {});

try {
  obj.pop();
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}


var obj = {pop : Array.prototype.pop, length : 2};
Object.freeze(obj);

try {
  obj.pop();
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}
