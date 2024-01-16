






function testArray(SORT_FNC, limit, test_id) {
    var THROW = function (pos) {
        throw new Error("Broken sort!!! (" + pos + ") for test:" + test_id);
    };

    function getArray(is_typed) {
        var t = is_typed ? new Int32Array(limit) : new Array(limit);

        for (var i = limit - 1; i >= 0; i--) {
            t[i] = i;
        }

        return t.sort(SORT_FNC);
    }

    
    var arr = new Array(limit);
    arr.fill(1);
    arr = arr.sort(SORT_FNC);
    if (arr[0] + arr[limit - 1] != 2) THROW(0); 

    
    arr[0] = 5;
    arr[limit - 1] = 0;
    arr = arr.sort(SORT_FNC);
    if (arr[0] + arr[limit - 1] != 5) THROW(1); 

    
    arr = getArray(0);
    if (arr[0] + arr[1] + arr[limit - 1] != limit) THROW(2); 

    
    arr = getArray(1);
    if (arr[0] + arr[1] + arr[limit - 1] != limit) THROW(3); 

    
    for (var i = 1; i < limit / 10; i++) {
        var tmp = arr[limit - i];
        arr[limit - i] = arr[i];
        arr[i] = tmp;
    }

    
    arr = arr.sort(SORT_FNC);
    if (arr[0] + arr[1] + arr[limit - 1] != limit) THROW(4); 

    
    for (var i = 1; i < limit / 10; i++) {
        var tmp = arr[limit - i];
        arr[limit - i] = arr[i];
        arr[i] = tmp;
    }

    var pos = limit - 1;
    for (var i = limit / 2; i < limit; i++) {
        var tmp = arr[pos];
        arr[pos] = arr[i];
        arr[i] = tmp;
        pos--;
    }

    
    arr = arr.sort(SORT_FNC);
    if (arr[0] + arr[1] + arr[limit - 1] != limit) THROW(5); 
}

var arraySize = WScript.Platform.BUILD_TYPE == "Release" ? 5e5  : 1e4; 

if (arraySize % 2 || arraySize < 1e4) {
    throw new Error(
        "Array size is too small.. and some of the loops above works better with arraySize % 2 == 0")
}

testArray(
    function (x, y) {
        return x > y ? +1 : (x < y ? -1 : 0);
    },
    arraySize ,
    "NoThrow");

testArray(
    function (x, y) {
        try {
            if (x % 2) throw new Error("Crash!!!! ?");
        } catch (e) {  }

        return x > y ? +1 : (x < y ? -1 : 0);
    },
    1000 ,
    "Throw-Catch Inside");


try {
    testArray(
        function (x, y) {
            if (x % 2) throw new Error("Crash!!!! ?");

            return x > y ? +1 : (x < y ? -1 : 0);
        },
        1000 ,
        "Throw-Catch Outside");
} catch (e) {  }

WScript.Echo("PASS");
