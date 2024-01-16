




function test() {
    Object.prototype['create'] = function () {};
    Object.prototype['yoyo'] = function () {};
    Object.prototype['splice'] = function () {};
    Object.prototype['watch'] = function () {};
    Object.prototype['setInt8'] = function () {};
    Object.prototype['unwatch'] = function () {};
    Object.prototype['eval'] = function () {};

    (function () {
        function foo() {
            Object.defineProperty(this, "b", ({
                    set : isNaN,
                    configurable : true
                }));
            Object.defineProperty(this, "w", ({
                    configurable : true
                }));
        }
        try {
            foo();
        } catch (e) {
            WScript.Echo(1);
        }
    })();
    for (var y in[true, true, true, true, true, true, true, true, true, true, true, true, true, true, new Boolean(false), true,  true]) {
        w;
    }
    function bar() {
        Object.defineProperty(this, "a", ({
                configurable : false
            }));
        delete this.w;
        this.w = false;
        Object.preventExtensions(this);
    };
    bar();
};


test();


test();
test();





