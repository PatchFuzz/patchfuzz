if (0) {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8];
    arr.length = Math.pow(2, 32) - 2;
    arr.splice(5); 

    print(arr.length, 5);
    print(arr[0], 1);
    print(arr[1], 2);
    print(arr[2], 3);
    print(arr[3], 4);
    print(arr[4], 5);
    print(arr[5], undefined);
}
