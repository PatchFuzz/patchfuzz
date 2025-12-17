(function test1() {
    print("Test1:");

    function SetUp() {
        Foo = function () { }
        Foo.prototype.a = 0;

        
        
        
        var dummy = new Foo();
        dummy.a = 0;
        dummy.b = 0;

        dummy.a = 0;
        dummy.b = 0;

        warmUpObj = new Foo();
        testObj = new Foo();
    }

    SetUp();

    function test(o) {
        
        for (var i = 0; i < 2; i++) {
            o.a = 10;
            o.b = 20;
        }
    }

    test(warmUpObj);

    
    Object.defineProperty(Foo.prototype, "a", { writable: false });

    
    test(testObj);

    var passed = testObj.a == Foo.prototype.a;
    print(passed ? "Passed" : "Failed");
    print();
})();

(function test2() {
    print("Test2:");

    function test0(objects) {
        
        for (var i = 0; i < 2; i++) {
            if (i = 1) {
                makeReadOnly(MakeObject.prototype);
            }
            var o = objects[i];
            o.x = 1;
            o.y = 1;
            o.z = 1;
        }
    };

    function MakeObject() {
    }

    var p = {}
    MakeObject.prototype = p;

    function makeReadOnly(o) {
        Object.defineProperty(o, "x", { value: "0", writable: false });
    }

    var o = new MakeObject();
    o.x = 1;
    o.y = 1;
    o.z = 1;

    var objects = [new MakeObject(), new MakeObject()];
    test0(objects);

    var passed = objects[1].x == MakeObject.prototype.x;
    print(passed ? "Passed" : "Failed");
    print();
})();
