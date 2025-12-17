function print(b) {
    if (!b)
        throw new Error("Bad!")
}
noInline(print);

function test1() {
    function foo(...c) {
        return c;
    }
    noInline(foo);

    let arr = [1,2,3];
    for (let i = 0; i < testLoopCount; i++) {
        let result = foo(...arr);
        print(result.length === 3);
        print(result.length === arr.length);
        print(result[0] === arr[0]);
        print(result[1] === arr[1]);
        print(result[2] === arr[2]);
    }

    let called = false;
    Reflect.defineProperty(Array.prototype, "10", {
        get() { return 35; },
        set(x) { called = true; }
    });
    let called2 = false;
    Reflect.defineProperty(Array.prototype, "0", {
        get: function() { print("In get!"); return 35; },
        set: function(x) { called2 = true; }
    });

    for (let i = 0; i < testLoopCount; i++) {
        let result = foo(...arr);
        print(result.length === 3);
        print(result[0] === arr[0]);
        print(result[0] === 1);
        print(result[1] === arr[1]);
        print(result[2] === arr[2]);
        result[10] = 25;
        print(result[10] === 35);
        print(called);
        called = false;

        result[0] = "foo";
        print(!called2); 
    }

    for (let i = 0; i < testLoopCount; i++) {
        let result = foo(...arr);
        print(result.length === 3);
        print(result[0] === arr[0]);
        print(result[0] === 1);
        print(result[1] === arr[1]);
        print(result[2] === arr[2]);
        result[11] = 35;
        print(result.length === 12);
        result[10] = 25;
        print(result[10] === 35);
        print(called);
        called = false;

        result[0] = "foo";
        print(!called2); 
    }
}
test1();
