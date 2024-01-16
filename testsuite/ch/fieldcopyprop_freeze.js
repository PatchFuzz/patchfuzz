




(function () {
    var o = new Object();
    o.x = 4;
    Object.freeze(o);
    o.x = 3;
    WScript.Echo(o.x);
})();
