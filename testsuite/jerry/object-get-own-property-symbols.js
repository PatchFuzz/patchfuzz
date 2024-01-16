


var a = Symbol ('a');
var b = Symbol ('b');
var c = Symbol ('c');
var d = Symbol ();

var arr = [a, b, c, d];
var props = Object.getOwnPropertySymbols (arr);

assert (props.indexOf ('0') === -1);
assert (props.indexOf ('1') === -1);
assert (props.indexOf ('2') === -1);
assert (props.indexOf ('length') === -1);
assert (props.length === 0);


var obj = {};
obj[a] = 'a';
obj[b] = 'b';
obj[c] = 'c';
obj[d] = 'd';
props = Object.getOwnPropertySymbols (obj);

assert (props.indexOf(a) !== -1);
assert (props.indexOf(b) !== -1);
assert (props.indexOf(c) !== -1);
assert (props.indexOf(d) !== -1);
assert (props.length === 4);


var fooSymbol1 = Symbol ('foo');
var fooSymbol2 = Symbol ('foo');
var fooSymbol3 = Symbol ('foo');
var fooSymbol4 = Symbol ('foo');

var obj = {}
obj[fooSymbol1] = 'foo';
obj[fooSymbol2] = 'bar';
obj[fooSymbol3] = 'foobar';
obj[fooSymbol4] = 'barfoo';

props = Object.getOwnPropertySymbols (obj);
assert (props.indexOf (fooSymbol1) !== -1);
assert (props.indexOf (fooSymbol2) !== -1);
assert (props.indexOf (fooSymbol3) !== -1);
assert (props.indexOf (fooSymbol4) !== -1);
assert (props.length === 4);

var mixed_object = {};
var foo = Symbol ('foo');
var bar = Symbol.for ('bar');

mixed_object[foo] = 'localSymbol';
mixed_object[bar] = 'globalSymbol';
mixed_object['foo'] = 'string';

var props = Object.getOwnPropertySymbols (mixed_object);

assert (typeof props[0] === 'symbol')
assert (props.indexOf(foo) !== -1);
assert (props.indexOf(bar) !== -1);
assert (props.indexOf('foo') === -1);
assert (props.length === 2)


function Parent() {}
Parent.prototype.inheritedMethod = function() {};

function Child() {
  this[a] = 5;
  this[b] = function() {};
}
Child.prototype = new Parent;
Child.prototype.prototypeMethod = function() {};

props = Object.getOwnPropertySymbols (new Child());

assert (props.indexOf(a) !== -1);
assert (props.indexOf(b) !== -1);

assert (props.length === 2);


var object = {};
var foo = Symbol ('foo');
var foo2 = Symbol ('foo2');
object[foo] = 'EnumerableSymbolProp';
Object.defineProperty(object, foo2, { value : 'NonEnumerableSymbolProp' });

props = Object.getOwnPropertySymbols (object);

assert (props.indexOf(foo) !== -1);
assert (props.indexOf(foo2) !== -1);
assert (props.length === 2);
assert (Object.getOwnPropertyDescriptor (object, foo).enumerable === true);
assert (Object.getOwnPropertyDescriptor (object, foo2).enumerable === false);
