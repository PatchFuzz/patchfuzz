var arr = ['a', 'b', 'c'];
var props = Object.keys(arr);

assert (props.indexOf("0") !== -1);
assert (props.indexOf("1") !== -1);
assert (props.indexOf("2") !== -1);
assert (props.length === 3);


var obj = {key1: 'a', key3: 'b', key2: 'c', key4: 'c', key5: ''};
props = Object.keys(obj);

assert (props.indexOf("key1") !== -1);
assert (props.indexOf("key2") !== -1);
assert (props.indexOf("key3") !== -1);
assert (props.indexOf("key4") !== -1);
assert (props.indexOf("key5") !== -1);
assert (props.length === 5);

var obj2 = {};
Object.defineProperties(obj2, {
    key_one: {enumerable: true, value: 'one'},
    key_two: {enumerable: false, value: 'two'},
});

props = Object.keys(obj2);

assert (props.indexOf("key_one") !== -1);
assert (props.indexOf("key_two") === -1);
assert (props.length === 1);


function Parent() {}
Parent.prototype.inheritedMethod = function() {};

function Child() {
  this.prop = 5;
  this.method = function() {};
}
Child.prototype = new Parent;
Child.prototype.prototypeMethod = function() {};

props = Object.keys (new Child());

assert (props.indexOf("prop") !== -1);
assert (props.indexOf("method") !== -1);
assert (props.length === 2);

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
assert(props.length === 2);
assert(o[props[0]] === "OK");
assert(o[props[1]] === "OK");

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

assert(keys.length === 1);
assert(keys[0] === "b");
assert(handlers.length === 2);
assert(handlers.toString() === "D,D");
