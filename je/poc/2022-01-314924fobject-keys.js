














var arr = ['a', 'b', 'c'];
var props = Object.keys(arr);

print(props.indexOf("0") !== -1);
print(props.indexOf("1") !== -1);
print(props.indexOf("2") !== -1);
print(props.length === 3);


var obj = {key1: 'a', key3: 'b', key2: 'c', key4: 'c', key5: ''};
props = Object.keys(obj);

print(props.indexOf("key1") !== -1);
print(props.indexOf("key2") !== -1);
print(props.indexOf("key3") !== -1);
print(props.indexOf("key4") !== -1);
print(props.indexOf("key5") !== -1);
print(props.length === 5);

var obj2 = {};
Object.defineProperties(obj2, {
    key_one: {enumerable: true, value: 'one'},
    key_two: {enumerable: false, value: 'two'},
});

props = Object.keys(obj2);

print(props.indexOf("key_one") !== -1);
print(props.indexOf("key_two") === -1);
print(props.length === 1);


function Parent() {}
Parent.prototype.inheritedMethod = function() {};

function Child() {
  this.prop = 5;
  this.method = function() {};
}
Child.prototype = new Parent;
Child.prototype.prototypeMethod = function() {};

props = Object.keys (new Child());

print(props.indexOf("prop") !== -1);
print(props.indexOf("method") !== -1);
print(props.length === 2);

var o = {};

Object.defineProperty(o, 'a', {
  value: "OK",
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(o, 'b', {
  value: "NOT_OK",
  writable: true,
  enumerable: false,
  configurable: true
});

Object.defineProperty(o, 'c', {
  value: "OK",
  writable: true,
  enumerable: true,
  configurable: true
});

props = Object.keys(o);
print(props.length === 2);
print(o[props[0]] === "OK");
print(o[props[1]] === "OK");

var object = {};

Object.defineProperties(object, {
  a: {
    value: "foo",
    enumerable: false
  },
  b: {
    value: "bar",
    enumerable: true,
    writable: false
  }
});

var proxy = new Proxy(object, {
  getOwnPropertyDescriptor: function(o, v) {
    handlers.push("D");
    return Object.getOwnPropertyDescriptor(o, v);
  },
  get: function(o, v) {
    handlers.push("G");
    return o[v];
  }
});

var handlers = [];
var keys = Object.keys(proxy);

print(keys.length === 1);
print(keys[0] === "b");
print(handlers.length === 2);
print(handlers.toString() === "D,D");
