













assert(RegExp.prototype[Symbol.matchAll].length === 1);
var desc = Object.getOwnPropertyDescriptor(RegExp.prototype[Symbol.matchAll], "length");
assert(!desc.enumerable);
assert(!desc.writable);
assert(desc.configurable);

assert(RegExp.prototype[Symbol.matchAll].name === "[Symbol.matchAll]");
var desc = Object.getOwnPropertyDescriptor(RegExp.prototype[Symbol.matchAll], "name");
assert(!desc.enumerable);
assert(!desc.writable);
assert(desc.configurable);


var re = /[0-9]+/g;
var str = '2016-01-02';
var result = re[Symbol.matchAll](str);
assert(Array.from(result, x => x[0]).toString() === "2016,01,02");

class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    const result = RegExp.prototype[Symbol.matchAll].call(this, str);
    if (!result) {
      return null;
    }
    return Array.from(result);
  }
}
  
var regexp = new MyRegExp('-[0-9]+', 'g');
var result = re[Symbol.matchAll]("2016-01-02|2019-03-07");
assert(Array.from(result, x => x[0]).toString() === "2016,01,02,2019,03,07");

var counter = 0;
var callArgs;
var regexp = /\d/u;
regexp.constructor = {
  [Symbol.species]: function(){
    counter++;
    callArgs = arguments;
    return /\w/g;
  }
};

var str = 'a*b';
var result = regexp[Symbol.matchAll](str);

assert(counter === 1);
assert(callArgs.length === 2);
assert(callArgs[0] === regexp);
assert(callArgs[1] === 'u');
assert(Array.from(result, x => x[0]).toString() === "a");


var regexp = /a/g;
Object.defineProperty(regexp, 'flags', { get () { throw 42; }});

try {
  regexp[Symbol.matchAll]("foo");
  assert(false);
} catch (e) {
  assert(e === 42);
}


var regexp = /a/g;
var sym = Symbol("foo")
Object.defineProperty(regexp, 'flags', { value: sym });

try {
  regexp[Symbol.matchAll]("foo");
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}


var regexp = /[A-Z]/g;
Object.defineProperty (regexp, Symbol.match, { get () { throw 42; }});

try {
  regexp[Symbol.matchAll]("foo");
  assert(false);
} catch (e) {
  assert(e === 42);
}


var obj = {
  toString() {
     throw 42;
   }
};

try {
  RegExp.prototype[Symbol.matchAll].call(obj, ''); 
  assert(false);
} catch (e) {
  assert(e === 42);
}


var regexp = /./;
Object.defineProperty(regexp, 'constructor', {
  get(){
    throw 42;
  }
});

try {
  regexp[Symbol.matchAll]("foo");
  assert(false);
} catch (e) {
  assert(e === 42);
}


var regexp = /[A-Z]/;
Object.defineProperty(regexp, 'global', { get() { throw 42; }});

try {
  regexp[Symbol.matchAll]('');
  assert(false);
} catch (e) {
  assert(e === 42);
}


var regexp = /[A-Z]/;
regexp.lastIndex = {
  valueOf() {
    throw 42;
  }
};

try {
  regexp[Symbol.matchAll]("foo");
  assert(false);
} catch (e) {
  assert(e === 42);
}


try {
  RegExp.prototype[Symbol.matchAll].call(null, '');
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  RegExp.prototype[Symbol.matchAll].call(true, '');
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  RegExp.prototype[Symbol.matchAll].call('', '');
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  RegExp.prototype[Symbol.matchAll].call(Symbol(), '');
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  RegExp.prototype[Symbol.matchAll].call(1, '');
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
