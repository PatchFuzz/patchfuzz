




function test0() {
    function func0() {
        return -(this.prop0 = 0.1);
    }
    return new func0().prop0;
}
WScript.Echo(test0());
Object.defineProperty(
    Object.prototype, 'prop0', {
        get: function () {
            return "get";
        },
        set: function (a) {
            WScript.Echo("set:" + a);
        }
    }
);
WScript.Echo(test0());
