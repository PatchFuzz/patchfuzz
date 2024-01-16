




for (var i = 0; i < 3; i++) {
    Object.prototype['fireEvent'] = function () {
        return this;
    };
    var window = function () {
    };
    (function () {
        if (window.fireEvent()) {
            +window;
        }
    })();
}

print('pass');
