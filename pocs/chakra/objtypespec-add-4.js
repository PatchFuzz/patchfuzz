function test0(condition) {
    var obj0 = {};
    obj0.prop0 = 1;

    var obj1 = {};
    obj1.prop0 = 1;

    if (condition) {
        obj1 = obj0;
    }

    (function (o, p) {
        var v = o.prop0;
        p.a = 11;
        p.b = 12;
        o.x = 21;
        o.y = 22;
    })(obj0, obj1);

    print("obj0 === obj1: " + (obj0 === obj1));
    print("obj0: { prop0: " + obj0.prop0 + ", a: " + obj0.a + ", b: " + obj0.b + ", x: " + obj0.x + ", y: " + obj0.y + " }");
    print("obj1: { prop0: " + obj1.prop0 + ", a: " + obj1.a + ", b: " + obj1.b + ", x: " + obj1.x + ", y: " + obj1.y + " }");
};

print("Test0:");
test0(false);
test0(false);

test0(true);




function test1(condition) {
    var obj0 = {};
    obj0.prop0 = 1;

    var obj1 = {};
    obj1.prop0 = 1;

    if (condition) {
        obj1 = obj0;
    }

    (function (o) {
        var v = o.prop0;
        obj1.a = 11;
        obj1.b = 12;
        o.x = 21;
        o.y = 22;
    })(obj0);

    print("obj0 === obj1: " + (obj0 === obj1));
    print("obj0: { prop0: " + obj0.prop0 + ", a: " + obj0.a + ", b: " + obj0.b + ", x: " + obj0.x + ", y: " + obj0.y + " }");
    print("obj1: { prop0: " + obj1.prop0 + ", a: " + obj1.a + ", b: " + obj1.b + ", x: " + obj1.x + ", y: " + obj1.y + " }");
};

print("Test1:");
test1(false);
test1(false);

test1(true);
