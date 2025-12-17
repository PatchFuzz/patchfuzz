function lookupWithKey(key) {
    var object = {
        [key]: 42
    };
    return object[key];
}
noInline(lookupWithKey);

for (var i = 0; i < testLoopCount; ++i) {
    [
        
        -0x80000001,  
        -0x80000000,  
        -1,           
        0,            
        1,            
        0x7fffffff,   
        0x80000000,   
        0xfffffffd,   
        0xfffffffe,   
        0xffffffff,   
        0x100000000,  

        
        (-0x80000001).toString(),  
        (-0x80000000).toString(),  
        (-1).toString(),           
        (0).toString(),            
        (1).toString(),            
        (0x7fffffff).toString(),   
        (0x80000000).toString(),   
        (0xfffffffd).toString(),   
        (0xfffffffe).toString(),   
        (0xffffffff).toString(),   
        (0x100000000).toString(),  

        
        Number.MIN_VALUE,
        Number.MAX_VALUE,
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER,
        Number.POSITIVE_INFINITY,
        Number.NEGATIVE_INFINITY,
        Number.NaN,
        Number.EPSILON,
        +0.0,
        -0.0,
        0.1,
        -0.1,
        4.2,
        -4.2,
        0x80000000 + 0.5,   

        
        (Number.MIN_VALUE).toString(),
        (Number.MAX_VALUE).toString(),
        (Number.MIN_SAFE_INTEGER).toString(),
        (Number.MAX_SAFE_INTEGER).toString(),
        (Number.POSITIVE_INFINITY).toString(),
        (Number.NEGATIVE_INFINITY).toString(),
        "NaN",
        (Number.EPSILON).toString(),
        "+0.0",
        "-0.0",
        "0.1",
        "-0.1",
        "4.2",
        "-4.2",
        (0x80000000 + 0.5).toString()
    ].forEach(function (key) {
        var value = lookupWithKey(key);
        if (value !== 42)
            throw new Error('bad value: ' + value);
    });
}

function lookupWithKey2(key) {
    var object = {
        [key]: 42
    };
    return object[key];
}
noInline(lookupWithKey2);

var toStringThrowsError = {
    toString: function () {
        throw new Error('ng');
    }
};

for (var i = 0; i < testLoopCount; ++i) {
    var error = null;
    try {
        lookupWithKey2(toStringThrowsError);
    } catch (e) {
        error = e;
    }
    if (!error)
        throw new Error('not thrown');
    if (String(error) !== 'Error: ng')
        throw new Error('bad error: ' + String(error));
}
