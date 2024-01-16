

































function get() { return x; }
function set(x) { this.x = x; }

var obj = {x: 1};
obj.__defineGetter__("accessor", get);
obj.__defineSetter__("accessor", set);
var a = new Array();
a[1] = 42;
obj[1] = 42;

var descIsData = Object.getOwnPropertyDescriptor(obj, 'x');
assertTrue(descIsData.enumerable);
assertTrue(descIsData.writable);
assertTrue(descIsData.configurable);

var descIsAccessor = Object.getOwnPropertyDescriptor(obj, 'accessor');
assertTrue(descIsAccessor.enumerable);
assertTrue(descIsAccessor.configurable);
assertTrue(descIsAccessor.get == get);
assertTrue(descIsAccessor.set == set);

var descIsNotData = Object.getOwnPropertyDescriptor(obj, 'not-x');
assertTrue(descIsNotData == undefined);

var descIsNotAccessor = Object.getOwnPropertyDescriptor(obj, 'not-accessor');
assertTrue(descIsNotAccessor == undefined);

var descArray = Object.getOwnPropertyDescriptor(a, '1');
assertTrue(descArray.enumerable);
assertTrue(descArray.configurable);
assertTrue(descArray.writable);
assertEquals(descArray.value, 42);

var descObjectElement = Object.getOwnPropertyDescriptor(obj, '1');
assertTrue(descObjectElement.enumerable);
assertTrue(descObjectElement.configurable);
assertTrue(descObjectElement.writable);
assertEquals(descObjectElement.value, 42);


var a = new String('foobar');
for (var i = 0; i < a.length; i++) {
  var descStringObject = Object.getOwnPropertyDescriptor(a, i);
  assertTrue(descStringObject.enumerable);
  assertFalse(descStringObject.configurable);
  assertFalse(descStringObject.writable);
  assertEquals(descStringObject.value, a.substring(i, i+1));
}


a.x = 42;
a[10] = 'foo';
var descStringProperty = Object.getOwnPropertyDescriptor(a, 'x');
assertTrue(descStringProperty.enumerable);
assertTrue(descStringProperty.configurable);
assertTrue(descStringProperty.writable);
assertEquals(descStringProperty.value, 42);

var descStringElement = Object.getOwnPropertyDescriptor(a, '10');
assertTrue(descStringElement.enumerable);
assertTrue(descStringElement.configurable);
assertTrue(descStringElement.writable);
assertEquals(descStringElement.value, 'foo');


var proto = {};
proto[10] = 42;

var objWithProto = new Array();
objWithProto.prototype = proto;
objWithProto[0] = 'bar';
var descWithProto = Object.getOwnPropertyDescriptor(objWithProto, '10');
assertEquals(undefined, descWithProto);


var global = (function() { return this; })();

global[42] = 42;

function el_getter() { return 239; };
function el_setter() {};
Object.defineProperty(global, '239', {get: el_getter, set: el_setter});

var descRegularElement = Object.getOwnPropertyDescriptor(global, '42');
assertEquals(42, descRegularElement.value);

var descAccessorElement = Object.getOwnPropertyDescriptor(global, '239');
assertEquals(el_getter, descAccessorElement.get);
assertEquals(el_setter, descAccessorElement.set);
