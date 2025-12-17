;

var m = {1: 'peek'};
var a = [0, , 2, 3];
a.__proto__ = m;
var log = [];
Object.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
for (var x of a)
    log.push(x);
print(log[1], 'peek');
print(log.join(), "0,peek,2,3");
