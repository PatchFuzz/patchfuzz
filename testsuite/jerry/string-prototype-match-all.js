













assert(String.prototype.matchAll.length === 1);
var desc = Object.getOwnPropertyDescriptor(String.prototype.matchAll, "length");
assert(!desc.enumerable);
assert(!desc.writable);
assert(desc.configurable);

assert(String.prototype.matchAll.name === "matchAll");
var desc = Object.getOwnPropertyDescriptor(String.prototype.matchAll, "name");
assert(!desc.enumerable);
assert(!desc.writable);
assert(desc.configurable);


var re = /[0-9]+/g;
var str = '2016-01-02|2019-03-07';
var result = str.matchAll(re);
var result_array = Array.from(result, x => x[0]);
assert(result_array.toString() === "2016,01,02,2019,03,07");

var counter = 0;
var obj = {};
RegExp.prototype[Symbol.matchAll] = function() {
  counter++;
  return obj;
};

assert('a'.matchAll(null) === obj);
assert(counter === 1);

assert(''.matchAll(undefined) === obj);
assert(counter === 2) ;

var obj = {};
var retval = {};
var counter = 0;
var thisVal, args;

obj[Symbol.matchAll] = function () {
    counter++;
  thisVal = this;
  args = arguments;
  return retval;
};

var str = ''

assert(str.matchAll(obj) === retval);
assert(counter === 1);
assert(thisVal === obj);
assert(args !== undefined);
assert(args.length === 1);
assert(args[0] === str);


try {
  "foo".matchAll(/a/);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  "foo".matchAll(/a/i);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  "foo".matchAll(/a/m);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  "foo".matchAll(/a/u);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  "foo".matchAll(/a/u);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  "foo".matchAll(/a/y);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

var regexp = /a/;
Object.defineProperty(regexp, 'flags', {
  value: 'muyi'
});

try {
  "foo".matchAll(regexp);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var regexp = /a/g;
Object.defineProperty(regexp, 'flags', { value: undefined });

try {
  "foo".matchAll(regexp)
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var regexp = /[A-Z]/g;
Object.defineProperty (regexp, Symbol.match, { get () { throw 42; }});

try {
  "foo".matchAll(regexp);
  assert(false);
} catch (e) {
  assert(e === 42);
}


var regexp = /a/g;
Object.defineProperty(regexp, 'flags', { get () { throw 42; }});

try {
  "foo".matchAll(regexp);
  assert(false);
} catch (e) {
  assert(e === 42);
}


var regexp = /a/g;
var sym = Symbol("foo")
Object.defineProperty(regexp, 'flags', { value: sym });

try {
  "foo".matchAll(regexp);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var regexp = /[A-Z]/g;
Object.defineProperty (regexp, Symbol.matchAll, { get () { throw 42; }});

try {
  "foo".matchAll(regexp);
  assert(false);
} catch (e) {
  assert(e === 42);
}
