function pluck1(a, key) {
    return a.map(function(item) { return item[key]; });
};
print([2, 2], pluck1([[0, 0], [0, 0]], 'length'));
print([1, 3], pluck1([[1, 2], [3, 4]], '0'));

function pluck2(a, key) {
    return a.map(function(item) { return item[key]; });
};
print([2, 2], pluck2(["ab", "cd"], 'length'));
print(["a", "c"], pluck2(["ab", "cd"], '0'));

function pluck3(a, key) {
    return a.map(function(item) { return item[key]; });
};
f = function() { 1 };
f.prototype = g = function() { 2 };
print([g, g], pluck3([f, f], 'prototype'));
print([undefined, undefined], pluck3([f, f], '0'));
