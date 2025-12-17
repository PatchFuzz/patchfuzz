;
;

var iterProto = null;

function test(constructor) {
    var iter = new constructor()[Symbol.iterator]();
    print(Reflect.ownKeys(iter), []);

    
    var proto1 = Object.getPrototypeOf(iter);
    print(Reflect.ownKeys(proto1), ['next', Symbol.toStringTag]);

    var desc = Object.getOwnPropertyDescriptor(proto1, 'next');
    print(desc.configurable, true);
    print(desc.enumerable, false);
    print(desc.writable, true);

    
    var proto2 = Object.getPrototypeOf(proto1);
    print(Object.getPrototypeOf(proto2), Object.prototype);
    print(Object.prototype.toString.call(proto2), "[object Iterator]");

    var expectedKeys = ["map", "filter", "take", "drop", "flatMap", "reduce", "toArray",
                        "forEach", "some", "every", "find", "constructor",
                        Symbol.iterator, Symbol.toStringTag];
    if (getBuildConfiguration("explicit-resource-management")) {
      expectedKeys.splice(expectedKeys.length - 1, 0, Symbol.dispose);
    }
    print(Reflect.ownKeys(proto2), expectedKeys);
    print(proto2[Symbol.iterator](), proto2);

    
    if (iterProto === null)
	iterProto = proto2;
    else
	print(iterProto, proto2);
}

test(Array);
test(String);
test(Map);
test(Set);
