load(libdir + "asserts.js");

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

    
    assertEq(typeof source, "object");
    assertEq(typeof transplant, "function");

    
    assertEq(objectGlobal(source), this);

    
    let oldPrototype;
    if (options.object) {
        oldPrototype = FakeDOMObject.prototype;
    } else {
        oldPrototype = Object.prototype;
    }
    assertEq(Object.getPrototypeOf(source), oldPrototype);

    
    assertEq(source.foo, undefined);
    source.foo = 1;
    assertEq(source.foo, 1);

    
    assertEq(transplant(global), undefined);

    
    
    if (global !== otherGlobalNewCompartment) {
        assertEq(objectGlobal(source), global);
    } else {
        assertEq(objectGlobal(source), null);
        assertEq(isProxy(source), true);
    }

    
    assertEq(source.foo, 1);

    
    
    let newPrototype;
    if (options.object) {
        newPrototype = global.FakeDOMObject.prototype;
    } else {
        newPrototype = global.Object.prototype;
    }
    assertEq(Object.getPrototypeOf(source), newPrototype);
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
    assertEq(global.eval("p"), source);

    if (options.proxy) {
        
        assertEq(global.eval("isProxy(p)"), true);
    } else {
        if (global === otherGlobalNewCompartment) {
            
            assertEq(global.eval("isProxy(p)"), true);
        } else {
            
            assertEq(global.eval("isProxy(p)"), false);
        }
    }

    
    transplant(global);

    assertEq(global.eval("p"), source);

    if (options.proxy) {
        
        assertEq(global.eval("isProxy(p)"), true);
    } else {
        
        assertEq(global.eval("isProxy(p)"), false);
    }
}
testWithOptions(testHasWrapperInTarget);


function testHasWrapperOtherCompartment(options, global) {
    let thirdGlobal = newGlobal({newCompartment: true});
    let {object: source, transplant} = transplantableObject(options);

    
    thirdGlobal.p = source;
    assertEq(thirdGlobal.eval("p"), source);

    
    transplant(global);

    assertEq(thirdGlobal.eval("p"), source);
}
testWithOptions(testHasWrapperOtherCompartment);


function testCollections(options, global, AnySet) {
    let {object, transplant} = transplantableObject(options);

    let set = new AnySet();

    assertEq(set.has(object), false);
    set.add(object);
    assertEq(set.has(object), true);

    transplant(global);

    assertEq(set.has(object), true);
}
testWithOptions(testCollections, [Set, WeakSet]);


function testDOMObjectSlot(global) {
    let domObject = new FakeDOMObject();
    let expectedValue = domObject.x;
    assertEq(typeof expectedValue, "number");

    let {object, transplant} = transplantableObject({object: domObject});
    assertEq(object, domObject);

    transplant(global);

    assertEq(object, domObject);
    assertEq(domObject.x, expectedValue);
}
testWithGlobals(testDOMObjectSlot);

function testArgumentValidation() {
    
    assertThrowsInstanceOf(() => transplantableObject(thisGlobal, {}), Error);

    let {object, transplant} = transplantableObject();

    
    assertThrowsInstanceOf(() => transplant(), Error);

    
    assertThrowsInstanceOf(() => transplant(thisGlobal, {}), Error);

    
    assertThrowsInstanceOf(() => transplant(null), Error);

    
    assertThrowsInstanceOf(() => transplant({}), Error);

    
    assertThrowsInstanceOf(() => transplant({object: null}), Error);
    assertThrowsInstanceOf(() => transplant({object: {}}), Error);
}
testArgumentValidation();
