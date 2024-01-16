




var l = (function () {
    function func_0() {
    }
    delete func_0.length;
    Object.defineProperty(Function.prototype, 'length', { writable: true });
    func_0.length = 'candy';
    return func_0.length;
}());

if (l === 'candy')
    WScript.Echo('pass')
