let arr0 = [];
var afterFirstCatch = false;

function foo(arg0) {
    var exception;
    let arr1 = [];
    arg0.__proto__ = arr1;
    try {
        foo(arr1);
    } catch (e) {
        
        
        
        if (afterFirstCatch)
            throw e;
        afterFirstCatch = true;
        exception = e;
    }
    for (let q in arr0) { }
    if (afterFirstCatch)
        throw exception; 
}

try {
    foo(arr0);
} catch (e) {
    if (e != "RangeError: Maximum call stack size exceeded.")
        throw e;
}
