var obj = {
  ["func"]: function() {return function() {} },
  ["arrowFunc"]: ()=>{return function() {} },
  ["method"]() {return function() {} },
  ["nonAnonymousFunc"]: function F() {return function() {} },
  get ["getter"]() {return function() {} },
};


print(displayName(obj.func()), "func/<");
print(displayName(obj.arrowFunc()), "arrowFunc/<");
print(displayName(obj.method()), "method/<");
print(displayName(obj.nonAnonymousFunc()), "F/<");


print(displayName(obj.getter), "");

let dummy = class {
  ["func"]() {return function() {} }
  ["arrowFunc"] = ()=>{return function() {} };
  ["method"]() {return function() {} }
  get ["getter"]() {return function() {} }
};

dum = new dummy();
print(displayName(dum.func()), "func/<");

print(displayName(dum.arrowFunc()), "dummy</</<");
print(displayName(dum.method()), "method/<");

print(displayName(dummy.prototype.getter), "dummy</<");



var objN = {
  [1]: function() {return function() {}},
  [5]: ()=>{return function() {}},
  [7] () {return function() {}},
  [8]: class {},
  [9]: function F() {return function() {}},
  [10]: class C{},
  get [11]() {return function() {}},
};
print(displayName(objN[1]()), "1/<");
print(displayName(objN[5]()), "5/<");
print(displayName(objN[7]()), "7/<");
print(displayName(objN[8]), "8");
print(displayName(objN[9]()), "F/<");
print(displayName(objN[10]), "C");

print(displayName(objN[11]), "objN/<");

let foo = class {
  [1] () {return function() {} }
  [5] = ()=>{return function() {} };
  [7] () {return function() {} }
  get [11]() {return function() {} }
};

f = new foo();

print(displayName(f[1]()), "1/<");

print(displayName(f[5]()), "foo</</<");
print(displayName(f[7]()), "7/<");
print(displayName(f[11]), "foo</<");



print(displayName(Object.getOwnPropertyDescriptor(Map.prototype, "size").get), "get size");
print(displayName(Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get), "get flags");
