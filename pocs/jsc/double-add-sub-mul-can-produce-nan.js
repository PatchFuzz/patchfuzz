"use strict";

function print(b) {
    if (!b)
        throw new Error;
}
noInline(print);

{
    function sub(arr, b, c) {
        let x = b - c;
        arr[0] = x;
    }
    noInline(sub);


    for (let i = 0; i < testLoopCount; ++i) {
        let arr = [];
        arr.length = 2;
        arr[1] = 10.5;
        sub(arr, 10.5, 20.5);
        print(0 in arr);
    }

    let arr = [];
    arr.length = 2;
    arr[1] = 10.5;
    sub(arr, Infinity, Infinity);
    print(typeof arr[0] === "number" && isNaN(arr[0]));
    print(0 in arr);
}

{
    function mul(arr, b, c) {
        let x = b * c;
        arr[0] = x;
    }
    noInline(mul);

    for (let i = 0; i < testLoopCount; ++i) {
        let arr = [];
        arr.length = 2;
        arr[1] = 10.5;
        mul(arr, 10.5, 20.5);
        print(0 in arr);
    }

    let arr = [];
    arr.length = 2;
    arr[1] = 10.5;
    mul(arr, Infinity, 0);
    print(typeof arr[0] === "number" && isNaN(arr[0]));
    print(0 in arr);
}

{
    function add(arr, b, c) {
        let x = b + c;
        arr[0] = x;
    }
    noInline(add);

    for (let i = 0; i < testLoopCount; ++i) {
        let arr = [];
        arr.length = 2;
        arr[1] = 10.5;
        add(arr, 10.5, 20.5);
        print(0 in arr);
    }

    let arr = [];
    arr.length = 2;
    arr[1] = 10.5;
    add(arr, Infinity, -Infinity);
    print(typeof arr[0] === "number" && isNaN(arr[0]));
    print(0 in arr);
}
