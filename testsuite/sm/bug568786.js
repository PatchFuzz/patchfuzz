


function f() {
    this.e = function() {};
    Object.defineProperty(this, "e", ({
        get: eval
    }));
}
new f();
