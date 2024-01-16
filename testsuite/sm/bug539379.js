try {
    
    x = /x/;
    (function f() {
        x.r = x;
        return f()
    })();
} catch (e) {}

