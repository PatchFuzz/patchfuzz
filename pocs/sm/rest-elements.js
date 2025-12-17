function calleeWithFormals(a, b, ...arr) {
    print(b, 2);
    if (arr.length > 0) {
        print(arr[0], 3);
    }
    if (arr.length > 1) {
        print(arr[1], Math);
    }
    if (arr.length > 2) {
        print(arr[2], "foo");
    }
    return arr;
}
function calleeWithoutFormals(...arr) {
    if (arr.length > 0) {
        print(arr[0], 3);
    }
    if (arr.length > 1) {
        print(arr[1], Math);
    }
    if (arr.length > 2) {
        print(arr[2], "foo");
    }
    return arr;
}
function f() {
    for (var i = 0; i < 100; i++) {
        print(calleeWithFormals(1, 2).length, 0);
        print(calleeWithFormals(1, 2, 3).length, 1);
        print(calleeWithFormals(1, 2, 3, Math).length, 2);
        print(calleeWithFormals(1, 2, 3, Math, "foo").length, 3);

        print(calleeWithoutFormals().length, 0);
        print(calleeWithoutFormals(3).length, 1);
        print(calleeWithoutFormals(3, Math).length, 2);
        print(calleeWithoutFormals(3, Math, "foo").length, 3);
    }
}
f();
