function write(args)
{
 print(args);
}

write("Test case 1");

function base() {}
var b = new base();
var prop = new Object();
var d = Object.create(b);
write(typeof d);
write(Object.getOwnPropertyNames(d));

write("Test case 2");

var prop = {b:{value:10},c:{value:30},d:{value:70}};
Array.prototype[1]=10;
var  a = Object.create(Array.prototype, prop);
print(Object.getOwnPropertyNames(a));
print(a[1]);

write("Test case 3");

var prop = {b:{value:10},c:{value:30},d:{value:70}};
var  a = Object.defineProperties({}, prop);
print(Object.getOwnPropertyNames(a));
print(a.b);

write("Test case 4");

var gettersetter = {get: function(){write("In getter");},set: function(arg){write("In setter")}};
var prop = {gs: gettersetter, bar: {value:10}};
var  a = Object.defineProperties({}, prop);
print(Object.getOwnPropertyNames(a));
a.gs;
a.gs=10;

write("Test case 5");
Object.defineProperty(
    Number.prototype,
    "p",
    {
        get: function () { write("In getter"); },
        set: function (v) { write("In setter"); },
        configurable: true,
        enumerable: true
    });
var o = 1;
o.p;
o.p = 2;
delete Number.prototype.p;

write("Test case 6 - simple dictionary");
var obj = {};
Object.defineProperty(Object.prototype, "data", { value:"qrs", enumerable:true, writable:true, configurable:true });

Object.defineProperty(obj, "data", { value:10, enumerable:true, writable:true, configurable:true });

delete obj.data;

write("Is global: " + (obj.data === "qrs"));

Object.defineProperty(obj, "data", { value:10, enumerable:true, writable:true, configurable:true });
write("Is local again: " + (obj.data === 10));

write("Test case 7 - dictionary");
var obj = {};
Object.defineProperty(Object.prototype, "data", { value:"qrs", enumerable:true, writable:true, configurable:true });

Object.defineProperty(obj, "data", { get: function(){}, enumerable:true,  configurable:true  });

delete obj.data;

write("Is global: " + (obj.data === "qrs"));

Object.defineProperty(obj, "data", { value:10, enumerable:true, writable:true, configurable:true });
write("Is local again: " + (obj.data === 10));

