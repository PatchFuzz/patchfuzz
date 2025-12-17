function f(formal) {

    
    

    var local;

    local = 0;
    var i = (function (x) {
        arguments[0];
        return ++local;
    })();
    if (i !== 1 || local !== 1) {
        print('fail: i == ', i, ', local == ', local);
        throw 0;
    }
    arguments[0];
}

print(f);
print(f);

print('pass');