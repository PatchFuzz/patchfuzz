function f() {
    var ret;
    for (var i = 0; i < 10; ++i) {
        {
            let local = 3;
            ret = function() { print(local++); }
        }
    }
    return ret;
}
f()();  

