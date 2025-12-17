function get() { return x; }
function set(x) { this.x = x; }

var obj = {x: 1};
obj.__defineGetter__("accessor", get);
obj.__defineSetter__("accessor", set);
var a = new Array();
a[1] = 42;
obj[1] = 42;

var descIsData = Object.getOwnPropertyDescriptor(obj, 'x');
print(descIsData.enumerable);
print(descIsData.writable);
print(descIsData.configurable);

var descIsAccessor = Object.getOwnPropertyDescriptor(obj, 'accessor');
print(descIsAccessor.enumerable);
print(descIsAccessor.configurable);
print(descIsAccessor.get == get);
print(descIsAccessor.set == set);

var descIsNotData = Object.getOwnPropertyDescriptor(obj, 'not-x');
print(descIsNotData == undefined);

var descIsNotAccessor = Object.getOwnPropertyDescriptor(obj, 'not-accessor');
print(descIsNotAccessor == undefined);

var descArray = Object.getOwnPropertyDescriptor(a, '1');
print(descArray.enumerable);
print(descArray.configurable);
print(descArray.writable);
print(descArray.value, 42);

var descObjectElement = Object.getOwnPropertyDescriptor(obj, '1');
print(descObjectElement.enumerable);
print(descObjectElement.configurable);
print(descObjectElement.writable);
print(descObjectElement.value, 42);


var a = new String('foobar');
for (var i = 0; i < a.length; i++) {
  var descStringObject = Object.getOwnPropertyDescriptor(a, i);
  print(descStringObject.enumerable);
  print(descStringObject.configurable);
  print(descStringObject.writable);
  print(descStringObject.value, a.substring(i, i+1));
}


a.x = 42;
a[10] = 'foo';
var descStringProperty = Object.getOwnPropertyDescriptor(a, 'x');
print(descStringProperty.enumerable);
print(descStringProperty.configurable);
print(descStringProperty.writable);
print(descStringProperty.value, 42);

var descStringElement = Object.getOwnPropertyDescriptor(a, '10');
print(descStringElement.enumerable);
print(descStringElement.configurable);
print(descStringElement.writable);
print(descStringElement.value, 'foo');


var proto = {};
proto[10] = 42;

var objWithProto = new Array();
objWithProto.prototype = proto;
objWithProto[0] = 'bar';
var descWithProto = Object.getOwnPropertyDescriptor(objWithProto, '10');
print(undefined, descWithProto);


var global = (function() { return this; })();

global[42] = 42;

function el_getter() { return 239; };
function el_setter() {};
Object.defineProperty(global, '239', {get: el_getter, set: el_setter});

var descRegularElement = Object.getOwnPropertyDescriptor(global, '42');
print(42, descRegularElement.value);

var descAccessorElement = Object.getOwnPropertyDescriptor(global, '239');
print(el_getter, descAccessorElement.get);
print(el_setter, descAccessorElement.set);
