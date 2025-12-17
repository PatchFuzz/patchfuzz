var obj = { get value() {}, set value (v) { throw "Error";} };
Object.defineProperty(obj, "value",
                      { value: 5, writable:true, configurable: true });
var desc = Object.getOwnPropertyDescriptor(obj, "value");
print(obj.value, 5);
print(desc.configurable);
print(desc.enumerable);
print(desc.writable);
print(desc.get, undefined);
print(desc.set, undefined);


var proto = {
  get value() {},
  set value(v) { Object.defineProperty(this, "value", {value: v}); }
};

var create = Object.create(proto);

print(create.value, undefined);
create.value = 4;
print(create.value, 4);


var obj1 = {};
Object.defineProperty(obj1, 'p', {get: undefined, set: undefined});
print("p" in obj1);
desc = Object.getOwnPropertyDescriptor(obj1, "p");
print(desc.configurable);
print(desc.enumerable);
print(desc.value, undefined);
print(desc.get, undefined);
print(desc.set, undefined);


var obj2 = { get p() {}};
Object.defineProperty(obj2, 'p', {get: undefined})
print("p" in obj2);
desc = Object.getOwnPropertyDescriptor(obj2, "p");
print(desc.configurable);
print(desc.enumerable);
print(desc.value, undefined);
print(desc.get, undefined);
print(desc.set, undefined);
