function f() {
    var arr = [1, 2, 3];
    var add1 = x => x + 1;
    for (var i = 0; i < 2000; i++) {
        print(arr.map(add1).toString(), "2,3,4");
        print(arr.map(add1, 1, 2, 3).toString(), "2,3,4");
        print(Reflect.get(arr, 1), 2);
        print(Reflect.get(arr, 1, 2), 2);
        print(Reflect.get(arr, 1, 2, 3, 4), 2);
    }
}
f();
