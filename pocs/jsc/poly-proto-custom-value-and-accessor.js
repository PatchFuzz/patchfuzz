var createCustomTestGetterSetter = print;

function print(b, m) {
    if (!b)
        throw new Error("Bad:" + m);
}

function makePolyProtoObject() {
    function foo() {
        class C { 
            constructor() { this.field = 20; }
        };
        return new C;
    }
    for (let i = 0; i < 15; ++i) {
        print(foo().field === 20);
    }
    return foo();
}

let items = [
    makePolyProtoObject(),
    makePolyProtoObject(),
    makePolyProtoObject(),
    makePolyProtoObject(),
    makePolyProtoObject(),
    makePolyProtoObject(),
    makePolyProtoObject(),
    makePolyProtoObject(),
    makePolyProtoObject(),
    makePolyProtoObject(),
    makePolyProtoObject(),
    makePolyProtoObject(),
    makePolyProtoObject(),
    makePolyProtoObject(),
    makePolyProtoObject(),
    makePolyProtoObject(),
];

let customGetterSetter = createCustomTestGetterSetter();
items.forEach((x) => {
    x.__proto__ = customGetterSetter;
    print(x.__proto__ === customGetterSetter);
});

function validate(x, valueResult, accessorResult) {
    print(x.customValue === valueResult);

    print(x.customAccessor === accessorResult);

    let o = {};
    x.customValue = o;
    print(o.result === undefined);
    print(x.customValue === o);

    o = {};
    x.customAccessor = o;
    print(o.result === accessorResult);

    print(x.randomProp === 42 || x.randomProp === undefined);
    x.customValue = valueResult;
}
noInline(validate);


let start = Date.now();
for (let i = 0; i < testLoopCount; ++i) {
    for (let i = 0; i < items.length; ++i) {
        validate(items[i], customGetterSetter, items[i]);
    }
}

customGetterSetter.randomProp = 42;

for (let i = 0; i < testLoopCount; ++i) {
    for (let i = 0; i < items.length; ++i) {
        validate(items[i], customGetterSetter, items[i]);
    }
}

function validate2(x, valueResult, accessorResult) {
    print(x.customValue === valueResult);

    print(x.customAccessor === accessorResult);

    let o = {};
    x.customValue = o;
    print(o.result === valueResult);

    o = {};
    x.customAccessor = o;
    print(o.result === accessorResult);

    print(x.randomProp === 42 || x.randomProp === undefined);
}
noInline(validate2);

items.forEach((x) => {
    delete x.customValue;
    Reflect.setPrototypeOf(x, {
        get customValue() { return 42; },
        get customAccessor() { return 22; },
        set customValue(x) { x.result = 42; },
        set customAccessor(x) { x.result = 22; },
    });
});

for (let i = 0; i < testLoopCount; ++i) {
    for (let i = 0; i < items.length; ++i) {
        validate2(items[i], 42, 22);
    }
}

if (false)
    print(Date.now() - start);
