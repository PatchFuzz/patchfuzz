;

function getObjects() {
    function func(){}
    return [func,
            new func(),
            {x: 5},
            /regexp/,
            [1, 2, 3],
            new Date(),
            new Number(1),
            new Boolean(true),
            new String('str'),
            Object.create(null)];
}

var coercibleValues = [1,
                       true,
                       'string'];

var nonCoercibleValues = [undefined,
                          null];

var valuesWithoutNull = coercibleValues.concat(undefined);

function TestSetPrototypeOf(object, proto) {
    print(Object.setPrototypeOf(object, proto), object);
    print(Object.getPrototypeOf(object), proto);
}


for(var value of coercibleValues) {
    print(Object.setPrototypeOf(value, {}), value);
}


for (var value of nonCoercibleValues) {
    print(() => Object.setPrototypeOf(value, {}),
        TypeError, "Object.setPrototypeOf shouldn't work on non-coercible values");
}


var objects = getObjects();
for (var object of objects) {
    for (var proto of valuesWithoutNull) {
        print(() => Object.setPrototypeOf(object, proto),
            TypeError, "Object.setPrototypeOf fails when the prototype is set to non-objects");
    }
}


var objects1 = getObjects();
var objects2 = getObjects();
for (var object1 of objects1) {
    for (var object2 of objects2) {
        TestSetPrototypeOf(object1, object2);
    }
}


objects = getObjects();
for (var object of objects) {
    TestSetPrototypeOf(object, null);
}


var objects = getObjects();
var proto = {};
for (var object of objects) {
    Object.preventExtensions(object);
    print(() => Object.setPrototypeOf(object, proto),
        TypeError, "Object.setPrototypeOf should fail when the object is not extensible");
}



var objectProto = {};
var nonExtensibleObject = Object.create(objectProto);
Object.preventExtensions(nonExtensibleObject);
print(Object.setPrototypeOf(nonExtensibleObject, objectProto), nonExtensibleObject);


var object = {};
print('x' in object, false);
print('y' in object, false);

var oldProto = {
    x: 'old x',
    y: 'old y'
};
Object.setPrototypeOf(object, oldProto);
print(object.x, 'old x');
print(object.y, 'old y');

var newProto = {
    x: 'new x'
};
Object.setPrototypeOf(object, newProto);
print(object.x, 'new x');
print('y' in object, false);


print(() => Object.setPrototypeOf(),
    TypeError, "Object.setPrototypeOf throws TypeError when called without any parameters");
print(() => Object.setPrototypeOf({}),
    TypeError, "Object.setPrototypeOf throws TypeError when called with 1 parameter");
