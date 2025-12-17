function testRedefineGetter() {
    var callGetter = function(o) {
        return o.x;
    };

    var proto = {get foo() {}, bar: 1};
    var obj = Object.create(proto);

    
    var count1 = 0;
    Object.defineProperty(proto, "x", {get: function(v) {
        count1++;
    }, configurable: true});
    for (var i = 0; i < 20; i++) {
        callGetter(obj);
    }
    print(count1, 20);

    
    var count2 = 0;
    Object.defineProperty(proto, "x", {get: function() {
        count2++;
    }, configurable: true});
    for (var i = 0; i < 20; i++) {
        callGetter(obj);
    }
    print(count1, 20);
    print(count2, 20);
}
testRedefineGetter();

function testRedefineSetter() {
    var callSetter = function(o) {
        o.x = 1;
    };

    var proto = {get foo() {}, bar: 1};
    var obj = Object.create(proto);

    
    var count1 = 0;
    Object.defineProperty(proto, "x", {set: function(v) {
        count1++;
    }, configurable: true});
    for (var i = 0; i < 20; i++) {
        callSetter(obj);
    }
    print(count1, 20);

    
    var count2 = 0;
    Object.defineProperty(proto, "x", {set: function() {
        count2++;
    }, configurable: true});
    for (var i = 0; i < 20; i++) {
        callSetter(obj);
    }
    print(count1, 20);
    print(count2, 20);
}
testRedefineSetter();

function testDeleteAdd() {
    var callGetter = function(o) {
        return o.x;
    };

    var proto = {get foo() {}, bar: 1};
    var obj = Object.create(proto);

    
    var count1 = 0;
    Object.defineProperty(proto, "x", {get: function() {
        count1++;
    }, configurable: true});
    for (var i = 0; i < 20; i++) {
        callGetter(obj);
    }
    print(count1, 20);

    
    delete proto.x;

    
    var count2 = 0;
    Object.defineProperty(proto, "x", {get: function() {
        count2++;
    }, configurable: true});
    for (var i = 0; i < 20; i++) {
        callGetter(obj);
    }
    print(count1, 20);
    print(count2, 20);
}
testDeleteAdd();

function testAccessorToDataAndBack() {
    var callGetter = function(o) {
        return o.x;
    };

    var proto = {get foo() {}, bar: 1};
    var obj = Object.create(proto);

    
    var count1 = 0;
    Object.defineProperty(proto, "x", {get: function() {
        count1++;
    }, configurable: true});
    for (var i = 0; i < 20; i++) {
        callGetter(obj);
    }
    print(count1, 20);

    
    Object.defineProperty(proto, "x", {configurable: true, value: 123});

    
    
    var count2 = 0;
    Object.defineProperty(proto, "x", {get: function() {
        count2++;
    }, configurable: true});
    for (var i = 0; i < 20; i++) {
        callGetter(obj);
    }
    print(count1, 20);
    print(count2, 20);
}
testAccessorToDataAndBack();
