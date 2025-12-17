;

var aproto = Object.getPrototypeOf(Array()[Symbol.iterator]());
var mproto = Object.getPrototypeOf((new Map())[Symbol.iterator]());
var sproto = Object.getPrototypeOf((new Set())[Symbol.iterator]());
print(aproto !== mproto, true);
print(aproto !== sproto, true);
print(mproto !== sproto, true);
print(aproto.next !== mproto.next, true);
print(aproto.next !== sproto.next, true);
print(mproto.next !== sproto.next, true);
