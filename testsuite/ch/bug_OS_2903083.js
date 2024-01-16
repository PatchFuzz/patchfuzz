




var test = function () {
    function x() { }
    {
        function x() { }
    }
    function y() {
    }
    return eval('new y()');
};
var a, b;
(a = test()) + (b = test());
if (Object.getPrototypeOf(a) === Object.getPrototypeOf(b)) {
    WScript.Echo("failed");
} else {
    WScript.Echo("passed");
}
