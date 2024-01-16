




(function () {
    var o = new Object();
    Object.preventExtensions(o);
    o.x = 3;
    WScript.Echo(o.x);
})();
