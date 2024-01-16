



function f() { return arguments }


Object.defineProperty(f, "name", {
  writable: true, configurable: true, value: 10});
assertEquals({value: 10, writable: true, enumerable: false, configurable: true},
             Object.getOwnPropertyDescriptor(f, "name"));

var args = f();



args[Symbol.iterator] = 10;
assertEquals({value: 10, writable: true, configurable: true, enumerable: false},
             Object.getOwnPropertyDescriptor(args, Symbol.iterator));
