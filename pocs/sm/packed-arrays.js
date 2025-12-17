var isPacked = getSelfHostedValue("IsPackedArray");

function test() {
    var arr;

    
    arr = [];
    print(isPacked(arr), true);
    arr[0] = 0;
    print(isPacked(arr), true);
    arr[2] = 2;
    print(isPacked(arr), false);

    
    arr = [1, 2, 3];
    print(isPacked(arr), true);
    delete arr[1];
    print(isPacked(arr), false);

    
    arr = [1];
    arr.length = 0;
    print(isPacked(arr), true);
    arr.length = 1;
    print(isPacked(arr), false);

    
    arr = [1, 2, , 3];
    print(isPacked(arr), false);
    print(isPacked(arr.slice(0, 2)), true);
    print(isPacked(arr.slice(0, 3)), false);
    print(isPacked(arr.slice(2, 3)), false);
    print(isPacked(arr.slice(3, 4)), true);

    
    arr = [1, 2, 3];
    print(isPacked(arr.splice(0)), true);
    arr = [1, , 2];
    print(isPacked(arr.splice(0)), false);
    arr = [1, , 2];
    print(isPacked(arr.splice(0, 1)), true);
    print(arr.length, 2);
    print(isPacked(arr.splice(0, 1)), false);
    print(arr.length, 1);
    print(isPacked(arr.splice(0, 1)), true);
    print(arr.length, 0);
    print(isPacked(arr.splice(0)), true);
}
for (var i = 0; i < 5; i++) {
    test();
}
