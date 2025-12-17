function test() {
    
    var arr = [];
    arr[10_000] = 1;
    arr[10_001] = 1;

    for (var prop in arr) {
        print(prop, "10000");
        print(arr.length, 10_002);

        
        for (var i = 0; i < arr.length; i++) {
            arr[i] = 1;
        }

        
        
        arr.length = 10_001;
    }
}
test();
