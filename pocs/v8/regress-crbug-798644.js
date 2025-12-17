let arr = [];

arr[1000] = 0x1234;

arr.__defineGetter__(256, function () {
    
    delete arr[256];
    
    arr.unshift(1.1);
});

let results = Object.entries(arr);
%HeapObjectVerify(results);
%HeapObjectVerify(arr);
let str = results.toString();
