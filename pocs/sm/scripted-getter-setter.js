if (getJitCompilerOptions()["ion.warmup.trigger"] > 50)
    setJitCompilerOption("ion.warmup.trigger", 50);

function getObjects() {
    var objs = [];

    
    objs.push({x: 0, get prop() {
        print();
        return ++this.x;
    }, set prop(v) {
        print();
        this.x += v;
    }});

    
    
    function getter(a, b, c) {
        print(arguments.length, 0);
        print(a, undefined);
        print(b, undefined);
        print(c, undefined);
        print();
        bailout();
        return ++this.y;
    }
    function setter1(a, b) {
        print(arguments.length, 1);
        print(b, undefined);
        print();
        this.y = a;
        bailout();
        return "unused";
    }
    var proto = {};
    Object.defineProperty(proto, "prop", {get: getter, set: setter1});
    objs.push(Object.create(proto));

    function setter2() {
        print(arguments.length, 1);
        print();
        this.y = arguments[0];
    }
    proto = {};
    Object.defineProperty(proto, "prop", {get: getter, set: setter2});
    objs.push(Object.create(proto));
    return objs;
}
function f() {
    var objs = getObjects();
    var res = 0;
    for (var i=0; i<200; i++) {
        var o = objs[i % objs.length];
        o.prop = 2;
        res += o.prop;
    }
    print(res, 7233);
}
f();
