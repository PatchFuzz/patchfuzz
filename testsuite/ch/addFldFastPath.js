




function testMonoInlineSlots() {
    var iterations = 10;
    var a = new Array(iterations);
    for (var i = 0; i < iterations; i++) {
        
        var o = { a: 0 };
        WScript.Echo("...");
        
        o.p = 1;
        WScript.Echo("...");
        
        o.z = -1;
        a[i] = o;
    }
    for (var i = 0; i < iterations; i++) {
        WScript.Echo("{ a: " + a[i].a + ", p: " + a[i].p + ", z: " + a[i].z + "}");
    }
}

WScript.Echo("testMonoInlineSlots: ");
testMonoInlineSlots();
testMonoInlineSlots();
WScript.Echo();


function testMonoInlineSlotsSetOrAdd() {
    var iterations = 10;
    var a = new Array(iterations);
    for (var i = 0; i < iterations; i++) {
        
        var o = { a: 0 };
        
        if (i % 2 == 0) {
            o.p = 1;
        }
        WScript.Echo("...");
        
        o.p = 1;
        WScript.Echo("...");
        
        o.z = -1;
        a[i] = o;
    }
    for (var i = 0; i < iterations; i++) {
        WScript.Echo("{ a: " + a[i].a + ", p: " + a[i].p + ", z: " + a[i].z + "}");
    }
}

WScript.Echo("testMonoInlineSlotsSetOrAdd: ");
testMonoInlineSlotsSetOrAdd();
testMonoInlineSlotsSetOrAdd();
WScript.Echo();


function testMonoAuxSlots() {
    var iterations = 10;
    var a = new Array(iterations);
    for (var i = 0; i < iterations; i++) {
        
        var o = {};
        
        o.a = 1;
        WScript.Echo("...");
        
        
        o.p = 1;
        WScript.Echo("...");
        
        o.z = -1;
        a[i] = o;
    }
    for (var i = 0; i < iterations; i++) {
        WScript.Echo("{ a: " + a[i].a + ", p: " + a[i].p + ", z: " + a[i].z + "}");
    }
}

WScript.Echo("testMonoAuxSlots: ");
testMonoAuxSlots();
testMonoAuxSlots();
WScript.Echo();


function testMonoAuxSlotsAdjustmentRequired1() {
    var iterations = 10;
    var a = new Array(iterations);
    for (var i = 0; i < iterations; i++) {
        
        var o = {};
        WScript.Echo("...");
        
        
        o.p = 1;
        WScript.Echo("...");
        
        o.z = -1;
        a[i] = o;
    }
    for (var i = 0; i < iterations; i++) {
        WScript.Echo("{ p: " + a[i].p + ", z: " + a[i].z + "}");
    }
}

WScript.Echo("testMonoAuxSlotsAdjustmentRequired1: ");
testMonoAuxSlotsAdjustmentRequired1();
testMonoAuxSlotsAdjustmentRequired1();
WScript.Echo();


function testMonoAuxSlotsAdjustmentRequired2() {
    var iterations = 10;
    var a = new Array(iterations);
    for (var i = 0; i < iterations; i++) {
        
        var o = {};
        
        o.a = 0;
        o.b = 1;
        o.c = 2;
        o.d = 3;
        WScript.Echo("...");
        
        
        o.p = 1;
        WScript.Echo("...");
        
        o.z = -1;
        a[i] = o;
    }
    for (var i = 0; i < iterations; i++) {
        WScript.Echo("{ a: " + a[i].a + ", b: " + a[i].b + ", c: " + a[i].c + ", d: " + a[i].d + ", p: " + a[i].p + ", z: " + a[i].z + "}");
    }
}

WScript.Echo("testMonoAuxSlotsAdjustmentRequired2: ");
testMonoAuxSlotsAdjustmentRequired2();
testMonoAuxSlotsAdjustmentRequired2();
WScript.Echo();


function testPoly() {
    var iterations = 25;
    var a = new Array(iterations);
    for (var i = 0; i < iterations; i++) {
        var o;
        switch (i % 3) {
            case 0:
                o = {};
                break;
            case 1:
                o = { a: 0 };
                break;
            case 2:
                o = { b: 0 };
                break;
        }
        if (i % 6 >= 3) {
            o.p = 0;
        }
        WScript.Echo("...");
        
        o.p = 1;
        WScript.Echo("...");
        o.z = -1;
        a[i] = o;
    }
    for (var i = 0; i < iterations; i++) {
        WScript.Echo("{ a: " + a[i].a + ", b: " + a[i].b + ", p: " + a[i].p + ", z: " + a[i].z + "}");
    }
}

WScript.Echo("testPoly: ");
testPoly();
testPoly();
WScript.Echo();

(function () {
    var Blank = function () {
    }

    Blank.prototype = { a: 0, b: 0, c: 0 }

    function setUpMonoStoreFieldCacheInvalidation() {
        
        
        var o = new Blank();
        o.a = 1;
        o.b = 2;
        o.c = 3;

        var o = new Blank();
        o.a = 1;
        o.b = 2;
        o.c = 3;
    }

    function testMonoStoreFieldCacheInvalidation(o, isNative) {
        
        
        if (isNative) {
            o.a = 1;
            o.b = 2;
            o.c = 3;
        }
    }

    WScript.Echo("testMonoStoreFieldCacheInvalidation: ");

    setUpMonoStoreFieldCacheInvalidation();

    var o = new Blank();
    testMonoStoreFieldCacheInvalidation(o, false);
    WScript.Echo("{ a: " + o.a + ", b: " + o.b + ", c: " + o.c + "}");

    var o = new Blank();
    testMonoStoreFieldCacheInvalidation(o, true);
    WScript.Echo("{ a: " + o.a + ", b: " + o.b + ", c: " + o.c + "}");

    
    
    Object.defineProperty(Blank.prototype, "b", { writable: false });

    var o = new Blank();
    testMonoStoreFieldCacheInvalidation(o, true);
    WScript.Echo("{ a: " + o.a + ", b: " + o.b + ", c: " + o.c + "}");
})();

WScript.Echo();

(function () {
    var Blank = function () {
    }

    Blank.prototype = { a: 0, b: 0, c: 0 }

    function setUpPolyStoreFieldCacheInvalidation() {
        
        
        var o = new Blank();
        o.a = 1;
        o.b = 2;
        o.c = 3;
        o.d = 4;

        var o = new Blank();
        o.a = 1;
        o.b = 2;
        o.c = 3;
        o.d = 4;
    }

    function testPolyStoreFieldCacheInvalidation(objects, isNative) {
        
        
        var o;
        for (var i = 0; i < 2; i++) {
            o = objects[i];
            o.a = 1;
            o.b = 2;
            o.c = 3;
        }
    }

    function reportResults(objects) {
        for (var i = 0; i < 2; i++) {
            var o = objects[i];
            WScript.Echo("{ a: " + o.a + ", b: " + o.b + ", c: " + o.c + "}");
        }
    }

    WScript.Echo("testPolyStoreFieldCacheInvalidation: ");

    setUpPolyStoreFieldCacheInvalidation();

    var warmUpObjects = new Array(2);
    warmUpObjects[0] = new Blank();
    var o = new Blank();
    o.a = 1;
    o.b = 2;
    o.c = 3;
    warmUpObjects[1] = o;
    testPolyStoreFieldCacheInvalidation(warmUpObjects, false);
    reportResults(warmUpObjects);

    
    
    
    Object.defineProperty(Blank.prototype, "b", { writable: false });

    var testObjects = new Array(2);
    testObjects[0] = new Blank();
    testObjects[1] = new Blank();
    testPolyStoreFieldCacheInvalidation(testObjects, true);
    reportResults(testObjects);

})();