function foo(){}
Object.defineProperty(foo, "prototype", { value: 2 });
print(2, foo.prototype);

function bar(){}
Object.defineProperty(bar, "prototype", { value: 2, writable: false });
print(2, bar.prototype);
print(function() { "use strict"; bar.prototype = 10; }, TypeError);
print(false, Object.getOwnPropertyDescriptor(bar,"prototype").writable);
