function testBasic() {
    let obj = {fun: newObjectWithCallHook()};
    for (var i = 0; i < 1000; i++) {
        let res = obj.fun(1, 2, 3);
        print(res.this, obj);
        print(res.callee, obj.fun);
        print(JSON.stringify(res.arguments), "[1,2,3]");
        print(res.newTarget, undefined);

        res = new obj.fun(1, 2, 3);
        print(res.this, "<is_constructing>");
        print(res.callee, obj.fun);
        print(JSON.stringify(res.arguments), "[1,2,3]");
        print(res.newTarget, obj.fun);
    }
}
testBasic();

function testSpread() {
    let obj = {fun: newObjectWithCallHook()};
    for (var i = 0; i < 1000; i++) {
        let res = obj.fun(...[1, 2, 3]);
        print(res.this, obj);
        print(res.callee, obj.fun);
        print(JSON.stringify(res.arguments), "[1,2,3]");
        print(res.newTarget, undefined);

        res = new obj.fun(...[1, 2, 3]);
        print(res.this, "<is_constructing>");
        print(res.callee, obj.fun);
        print(JSON.stringify(res.arguments), "[1,2,3]");
        print(res.newTarget, obj.fun);
    }
}
testSpread();

function testNewTarget() {
    let obj = newObjectWithCallHook();
    let newTargetVal = function() {};
    for (var i = 0; i < 1000; i++) {
        let res = Reflect.construct(obj, [], newTargetVal);
        print(res.this, "<is_constructing>");
        print(res.callee, obj);
        print(res.arguments.length, 0);
        print(res.newTarget, newTargetVal);
    }
}
testNewTarget();

function testRealmSwitch() {
    
    
    

    let g = newGlobal({sameCompartmentAs: this});
    let obj = g.newObjectWithCallHook();
    print(objectGlobal(obj), g);

    for (var i = 0; i < 1000; i++) {
        let res = obj(1, 2);
        print(objectGlobal(res), g);
        print(res.this, undefined);
        print(res.callee, obj);
        print(JSON.stringify(res.arguments), "[1,2]");

        res = new obj(1, 2);
        print(objectGlobal(res), g);
        print(res.this, "<is_constructing>");
        print(res.callee, obj);
        print(JSON.stringify(res.arguments), "[1,2]");
        print(res.newTarget, obj);
    }
}
testRealmSwitch();

function testCrossCompartmentWrapper() {
    

    let g = newGlobal({newCompartment: true});
    let obj = g.newObjectWithCallHook();
    print(isProxy(obj), true); 

    for (var i = 0; i < 1000; i++) {
        let res = obj(1, 2);
        print(isProxy(res), true);
        print(res.this, undefined);
        print(res.callee, obj);
        print(JSON.stringify(res.arguments), "[1,2]");

        res = new obj(1, 2);
        print(isProxy(res), true);
        print(res.this, "<is_constructing>");
        print(res.callee, obj);
        print(JSON.stringify(res.arguments), "[1,2]");
        print(res.newTarget, obj);
    }
}
testCrossCompartmentWrapper();
