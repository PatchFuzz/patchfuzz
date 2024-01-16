




function f(formal) {

    
    

    var local;

    local = 0;
    var i = (function (x) {
        arguments[0];
        return ++local;
    })();
    if (i !== 1 || local !== 1) {
        WScript.Echo('fail: i == ', i, ', local == ', local);
        throw 0;
    }
    arguments[0];
}

WScript.Attach(f);
WScript.Detach(f);

WScript.Echo('pass');