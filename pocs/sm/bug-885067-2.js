a = 0;
(function() {
    a = (() => eval("arguments"))();
})(1, 2, 3, 4);
print(a.length, 4);


a = 0;
(function() {
    (() => {
        a = (() => eval("arguments"))();
    })();
})(1, 2, 3, 4);
print(a.length, 4);


a = 0;
(function() {
    (() => {
        (function () {
            a = (() => eval("arguments"))();
        })(1, 2, 3, 4);
    })();
})();
print(a.length, 4);
