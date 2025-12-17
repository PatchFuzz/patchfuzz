var obj = {};
(function() {
    if (obj) {
        function f() { obj.x = 1; }
        obj.m = function() { f(); };
    }
})();
obj.m();
print(obj.x, 1);
