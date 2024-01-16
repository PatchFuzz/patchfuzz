





























var obj = { get value() {}, set value (v) { throw "Error";} };
Object.defineProperty(obj, "value",
                      { value: 5, writable:true, configurable: true });
var desc = Object.getOwnPropertyDescriptor(obj, "value");
assertEquals(obj.value, 5);
assertTrue(desc.configurable);
assertTrue(desc.enumerable);
assertTrue(desc.writable);
assertEquals(desc.get, undefined);
assertEquals(desc.set, undefined);


var proto = {
  get value() {},
  set value(v) { Object.defineProperty(this, "value", {value: v}); }
};

var create = Object.create(proto);

assertEquals(create.value, undefined);
create.value = 4;
assertEquals(create.value, 4);


var obj1 = {};
Object.defineProperty(obj1, 'p', {get: undefined, set: undefined});
assertTrue("p" in obj1);
desc = Object.getOwnPropertyDescriptor(obj1, "p");
assertFalse(desc.configurable);
assertFalse(desc.enumerable);
assertEquals(desc.value, undefined);
assertEquals(desc.get, undefined);
assertEquals(desc.set, undefined);


var obj2 = { get p() {}};
Object.defineProperty(obj2, 'p', {get: undefined})
assertTrue("p" in obj2);
desc = Object.getOwnPropertyDescriptor(obj2, "p");
assertTrue(desc.configurable);
assertTrue(desc.enumerable);
assertEquals(desc.value, undefined);
assertEquals(desc.get, undefined);
assertEquals(desc.set, undefined);
