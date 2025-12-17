if (!getBuildConfiguration("debug") && !getBuildConfiguration("asan")) {
    let longArray = [];
    longArray.length = getMaxArgs() + 1;
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
            print(e.message, "too many function arguments");
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
            print(e.message, "too many constructor arguments");
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
            print(e.message, "too many function arguments");
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
            print(e.message, "too many constructor arguments");
        }
    }

    
    a = longArray;
    try {
        eval(...a);
    } catch (e) {
        print(e.message, "too many function arguments");
    }
}
