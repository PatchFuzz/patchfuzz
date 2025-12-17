function test1() {
    function push(arr, x) {
        return arr.push(x);
    }
    var arr = [];
    for (var i=0; i<100; i++) {
        print(push(arr, i), i + 1);
    }
}
test1();

function test2() {
    var arr;
    for (var i=0; i<60; i++) {
        arr = [];
        print(arr.push(3.3), 1);
        print(arr.push(undefined), 2);
        print(arr.push(true), 3);
        print(arr.push(Math), 4);
        print(arr.toString(), "3.3,,true,[object Math]");
    }
}
test2();

function test3() {
    function push(arr, v) {
        arr.push(v);
    }
    for (var i=0; i<60; i++) {
        var arr = [];
        push(arr, null);
        push(arr, 3.14);
        push(arr, {});
        print(arr.toString(), ",3.14,[object Object]");
    }
}
test3();
