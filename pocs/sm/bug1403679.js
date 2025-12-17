;

const thisGlobal = this;
const otherGlobalSameCompartment = newGlobal({sameCompartmentAs: thisGlobal});
const otherGlobalNewCompartment = newGlobal({newCompartment: true});

const globals = [thisGlobal, otherGlobalSameCompartment, otherGlobalNewCompartment];

function testWithOptions(fn, variants = [undefined]) {
    for (let variant of variants) {
        for (let global of globals) {
            for (let options of [
                {},
                {proxy: true},
                {object: new FakeDOMObject()},
            ]) {
                fn(options, global, variant);
            }
        }
    }
}

function testWithGlobals(fn) {
    for (let global of globals) {
        fn(global);
    }
}

function testBasic(options, global) {
    let {object: source, transplant} = transplantableObject(options);

    
    print(typeof source, "object");
    print(typeof transplant, "function");

    
    print(objectGlobal(source), this);

    
    let oldPrototype;
    if (options.object) {
        oldPrototype = FakeDOMObject.prototype;
    } else {
        oldPrototype = Object.prototype;
    }
    print(Object.getPrototypeOf(source), oldPrototype);

    
    print(source.foo, undefined);
    source.foo = 1;
    print(source.foo, 1);

    
    print(transplant(global), undefined);

    
    
    if (global !== otherGlobalNewCompartment) {
        print(objectGlobal(source), global);
    } else {
        print(objectGlobal(source), null);
        print(isProxy(source), true);
    }

    
    print(source.foo, 1);

    
    
    let newPrototype;
    if (options.object) {
        newPrototype = global.FakeDOMObject.prototype;
    } else {
        newPrototype = global.Object.prototype;
    }
    print(Object.getPrototypeOf(source), newPrototype);
}
testWithOptions(testBasic);


function testTransplantMulti(options, global1, global2) {
    let {object: source, transplant} = transplantableObject(options);

    transplant(global1);
    transplant(global2);
}
testWithOptions(testTransplantMulti, globals);


function testHasWrapperInTarget(options, global) {
    let {object: source, transplant} = transplantableObject(options);

    
    global.p = source;
    print(global.eval("p"), source);

    if (options.proxy) {
        
        print(global.eval("isProxy(p)"), true);
    } else {
        if (global === otherGlobalNewCompartment) {
            
            print(global.eval("isProxy(p)"), true);
        } else {
            
            print(global.eval("isProxy(p)"), false);
        }
    }

    
    transplant(global);

    print(global.eval("p"), source);

    if (options.proxy) {
        
        print(global.eval("isProxy(p)"), true);
    } else {
        
        print(global.eval("isProxy(p)"), false);
    }
}
testWithOptions(testHasWrapperInTarget);


function testHasWrapperOtherCompartment(options, global) {
    let thirdGlobal = newGlobal({newCompartment: true});
    let {object: source, transplant} = transplantableObject(options);

    
    thirdGlobal.p = source;
    print(thirdGlobal.eval("p"), source);

    
    transplant(global);

    print(thirdGlobal.eval("p"), source);
}
testWithOptions(testHasWrapperOtherCompartment);


function testCollections(options, global, AnySet) {
    let {object, transplant} = transplantableObject(options);

    let set = new AnySet();

    print(set.has(object), false);
    set.add(object);
    print(set.has(object), true);

    transplant(global);

    print(set.has(object), true);
}
testWithOptions(testCollections, [Set, WeakSet]);


function testDOMObjectSlot(global) {
    let domObject = new FakeDOMObject();
    let expectedValue = domObject.x;
    print(typeof expectedValue, "number");

    let {object, transplant} = transplantableObject({object: domObject});
    print(object, domObject);

    transplant(global);

    print(object, domObject);
    print(domObject.x, expectedValue);
}
testWithGlobals(testDOMObjectSlot);

function testArgumentValidation() {
    
    print(() => transplantableObject(thisGlobal, {}), Error);

    let {object, transplant} = transplantableObject();

    
    print(() => transplant(), Error);

    
    print(() => transplant(thisGlobal, {}), Error);

    
    print(() => transplant(null), Error);

    
    print(() => transplant({}), Error);

    
    print(() => transplant({object: null}), Error);
    print(() => transplant({object: {}}), Error);
}
testArgumentValidation();
