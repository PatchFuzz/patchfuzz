






(function () {
    function f() {
        return this.foo();
    }

    var t = this;
    var x = { foo: function () { WScript.Echo(this); } };
    x.f = f;
    x.f();

    try {
        f();
    }
    catch (e) {
        WScript.Echo(e.message);
    }

    WScript.Echo(t === this);
})();

(function () {
    function f(o) {
        return o.foo();
    }

    var x = { foo: function () { WScript.Echo(this); } };
    f(x);
})();

function test() {
    Object.prototype['foo'] = function () {return this};
    var c = {}
    var x;
    x + c.foo("a");
    ((function(){
        return 1;
    })()).foo()
};

WScript.Echo(test());
WScript.Echo(test());
