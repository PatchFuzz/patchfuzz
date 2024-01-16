
x = [];

y = Object.defineProperty(Array.prototype, 1, {
    set: function () {}
});

x.splice(0, 1, y, y);
new Float64Array(x);
