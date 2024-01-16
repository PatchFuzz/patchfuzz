

function testBasic() {
    let obj = {fun: newObjectWithCallHook()};
    for (var i = 0; i < 1000; i++) {
        let res = obj.fun(1, 2, 3);
        assertEq(res.this, obj);
        assertEq(res.callee, obj.fun);
        assertEq(JSON.stringify(res.arguments), "[1,2,3]");
        assertEq(res.newTarget, undefined);

        res = new obj.fun(1, 2, 3);
        assertEq(res.this, "<is_constructing>");
        assertEq(res.callee, obj.fun);
        assertEq(JSON.stringify(res.arguments), "[1,2,3]");
        assertEq(res.newTarget, obj.fun);
    }
}
testBasic();

function testSpread() {
    let obj = {fun: newObjectWithCallHook()};
    for (var i = 0; i < 1000; i++) {
        let res = obj.fun(...[1, 2, 3]);
        assertEq(res.this, obj);
        assertEq(res.callee, obj.fun);
        assertEq(JSON.stringify(res.arguments), "[1,2,3]");
        assertEq(res.newTarget, undefined);

        res = new obj.fun(...[1, 2, 3]);
        assertEq(res.this, "<is_constructing>");
        assertEq(res.callee, obj.fun);
        assertEq(JSON.stringify(res.arguments), "[1,2,3]");
        assertEq(res.newTarget, obj.fun);
    }
}
testSpread();

function testNewTarget() {
    let obj = newObjectWithCallHook();
    let newTargetVal = function() {};
    for (var i = 0; i < 1000; i++) {
        let res = Reflect.construct(obj, [], newTargetVal);
        assertEq(res.this, "<is_constructing>");
        assertEq(res.callee, obj);
        assertEq(res.arguments.length, 0);
        assertEq(res.newTarget, newTargetVal);
    }
}
testNewTarget();

function testRealmSwitch() {
    
    
    

    let g = newGlobal({sameCompartmentAs: this});
    let obj = g.newObjectWithCallHook();
    assertEq(objectGlobal(obj), g);

    for (var i = 0; i < 1000; i++) {
        let res = obj(1, 2);
        assertEq(objectGlobal(res), g);
        assertEq(res.this, undefined);
        assertEq(res.callee, obj);
        assertEq(JSON.stringify(res.arguments), "[1,2]");

        res = new obj(1, 2);
        assertEq(objectGlobal(res), g);
        assertEq(res.this, "<is_constructing>");
        assertEq(res.callee, obj);
        assertEq(JSON.stringify(res.arguments), "[1,2]");
        assertEq(res.newTarget, obj);
    }
}
testRealmSwitch();

function testCrossCompartmentWrapper() {
    

    let g = newGlobal({newCompartment: true});
    let obj = g.newObjectWithCallHook();
    assertEq(isProxy(obj), true); 

    for (var i = 0; i < 1000; i++) {
        let res = obj(1, 2);
        assertEq(isProxy(res), true);
        assertEq(res.this, undefined);
        assertEq(res.callee, obj);
        assertEq(JSON.stringify(res.arguments), "[1,2]");

        res = new obj(1, 2);
        assertEq(isProxy(res), true);
        assertEq(res.this, "<is_constructing>");
        assertEq(res.callee, obj);
        assertEq(JSON.stringify(res.arguments), "[1,2]");
        assertEq(res.newTarget, obj);
    }
}
testCrossCompartmentWrapper();
