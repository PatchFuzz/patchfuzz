









function write(x) { WScript.Echo(x + ''); }

(function () {
    (function () {
        return true ? true : x;
    })();
    function x() { }; 
})();
try {
    var z = Object instanceof null;
}
catch (e) {
    write(e.message);
}

(function () {
    (function () {
        return true ? true : x;
    })();
    var x;
})();
try {
    var z = Object instanceof null;
}
catch (e) {
    write(e.message);
}

(function () {
    (function () {
        return false ? x : false;
    })();
    function x() { }; 
})();
try {
    var z = Object instanceof null;
}
catch (e) {
    write(e.message);
}

(function () {
    (function () {
        return false ? x : false;
    })();
    var x;
})();
try {
    var z = Object instanceof null;
}
catch (e) {
    write(e.message);
}
