x = [];
y = x.push(Set, 1);
Array.prototype.shift.call(x);

Object.defineProperty(Array.prototype, 1, {
    set: function() {}
})

Array.prototype.splice.call(x, 3, {}, y);
new Set(x);
