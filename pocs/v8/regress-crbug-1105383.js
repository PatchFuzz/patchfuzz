'use strict';
Object.defineProperty(
    this.__proto__, "boom",
    { value:153, writable:true, configurable: true, enumerable:false });

var good = 1;
try {
  boom = 42;
} catch (e) {}

var properties = Object.getOwnPropertyNames(this);

print(properties.findIndex(e => e == "good") >= 0);
print(properties.findIndex(e => e == "boom"), -1);
