













var object1 = {
    property1: 42
};

assert(Reflect.getOwnPropertyDescriptor(object1, 'property1').value === 42);
assert(Reflect.getOwnPropertyDescriptor(object1, 'property2') === undefined);
assert(Reflect.getOwnPropertyDescriptor(object1, 'property1').writable === true);
