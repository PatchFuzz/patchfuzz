var config = getBuildConfiguration();


if (!config.debug && !config.asan) {
    let longArray = [];
    longArray.length = getMaxArgs() - 1;
    let shortArray = [];
    let a;

    let f = function() {
    };

    
    
    a = shortArray;
    for (let i = 0; i < 4; i++) {
        if (i == 3) {
            a = longArray;
        }
        try {
            f(...a);
        } catch (e) {
            assertEq(e.message, "too much recursion");
        }
    }

    
    a = shortArray;
    for (let i = 0; i < 4; i++) {
        if (i == 3) {
            a = longArray;
        }
        try {
            new f(...a);
        } catch (e) {
            assertEq(e.message, "too much recursion");
        }
    }

    
    a = shortArray;
    for (let i = 0; i < 4; i++) {
        if (i == 3) {
            a = longArray;
        }
        try {
            Math.max(...a);
        } catch (e) {
            assertEq(e.message, "too much recursion");
        }
    }

    
    a = shortArray;
    for (let i = 0; i < 4; i++) {
        if (i == 3) {
            a = longArray;
        }
        try {
            new Date(...a);
        } catch (e) {
            assertEq(e.message, "too much recursion");
        }
    }

    
    a = longArray;
    try {
        eval(...a);
    } catch (e) {
        assertEq(e.message, "too much recursion");
    }
}
