function testTestIntegrityLevel(a, hasElems) {
    print(Object.isExtensible(a), true);
    print(Object.isSealed(a), false);
    print(Object.isFrozen(a), false);

    Object.preventExtensions(a);
    print(Object.isExtensible(a), false);
    print(Object.isSealed(a), !hasElems);
    print(Object.isFrozen(a), false);

    Object.seal(a);
    print(Object.isExtensible(a), false);
    print(Object.isSealed(a), true);
    print(Object.isFrozen(a), false);

    Object.freeze(a);
    print(Object.isExtensible(a), false);
    print(Object.isSealed(a), true);
    print(Object.isFrozen(a), true);
}
testTestIntegrityLevel([1, 2, 3], true);
testTestIntegrityLevel([1, , , 2], true);
testTestIntegrityLevel([1, , , ], true);
testTestIntegrityLevel([, , , ], false);
testTestIntegrityLevel([], false);
testTestIntegrityLevel({0: 0}, true);
var a = [,,,,,,, 1];
a.pop();
testTestIntegrityLevel(a, false);

function testDescriptor() {
    var a = [1];
    Object.preventExtensions(a);
    print(JSON.stringify(Object.getOwnPropertyDescriptors(a)),
             `{"0":{"value":1,"writable":true,"enumerable":true,"configurable":true},` +
             `"length":{"value":1,"writable":true,"enumerable":false,"configurable":false}}`);

    a = [1];
    Object.seal(a);
    print(JSON.stringify(Object.getOwnPropertyDescriptors(a)),
             `{"0":{"value":1,"writable":true,"enumerable":true,"configurable":false},` +
             `"length":{"value":1,"writable":true,"enumerable":false,"configurable":false}}`);

    a = [1];
    Object.freeze(a);
    print(JSON.stringify(Object.getOwnPropertyDescriptors(a)),
             `{"0":{"value":1,"writable":false,"enumerable":true,"configurable":false},` +
             `"length":{"value":1,"writable":false,"enumerable":false,"configurable":false}}`);
}
testDescriptor();
