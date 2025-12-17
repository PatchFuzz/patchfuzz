a = [1];
Object.defineProperty(a, "1", {writable:false, configurable:false, value: 100});
print("a.unshift(4);", TypeError);
print([1, 100, 100], a);
var desc = Object.getOwnPropertyDescriptor(a, "1");
print(false, desc.writable);
print(false, desc.configurable);

a = [1];
var g = function() { return 100; };
Object.defineProperty(a, "1", {get:g});
print("a.unshift(0);", TypeError);
print([1, 100, 100], a);
desc = Object.getOwnPropertyDescriptor(a, "1");
print(false, desc.configurable);
print(g, desc.get);

a = [1];
var c = 0;
var s = function(v) { c += 1; };
Object.defineProperty(a, "1", {set:s});
a.unshift(10);
print([10, undefined, undefined], a);
print(1, c);
desc = Object.getOwnPropertyDescriptor(a, "1");
print(false, desc.configurable);
print(s, desc.set);

a = [1];
Object.defineProperty(a, "1", {configurable:false, value:10});
print("a.splice(1,1);", TypeError);
print([1, 10], a);
desc = Object.getOwnPropertyDescriptor(a, "1");
print(false, desc.configurable);

a = [0,1,2,3,4,5,6];
Object.defineProperty(a, "3", {configurable:false, writable:false, value:3});
print("a.splice(1,4);", TypeError);
print([0,5,6,3,,,,], a);
desc = Object.getOwnPropertyDescriptor(a, "3");
print(false, desc.configurable);
print(false, desc.writable);

a = [0,1,2,3,4,5,6];
Object.defineProperty(a, "5", {configurable:false, value:5});
print("a.splice(1,4);", TypeError);
print([0,5,6,3,4,5,,], a);
desc = Object.getOwnPropertyDescriptor(a, "5");
print(false, desc.configurable);

a = [1,2,3,,5];
Object.defineProperty(a, "1", {configurable:false, writable:true, value:2});
print(1, a.shift());
print([2,3,,5], a);
desc = Object.getOwnPropertyDescriptor(a, "1");
print(false, desc.configurable);
print(true, desc.writable);
print("a.shift();", TypeError);
print([3,3,,5], a);
desc = Object.getOwnPropertyDescriptor(a, "1");
print(false, desc.configurable);
print(true, desc.writable);

a = [1,2,3];
Object.defineProperty(a, "2", {configurable:false, value:3});
print("a.pop();", TypeError);
print([1,2,3], a);
desc = Object.getOwnPropertyDescriptor(a, "2");
print(false, desc.configurable);
