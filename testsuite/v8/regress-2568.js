


























function pluck1(a, key) {
    return a.map(function(item) { return item[key]; });
};
assertArrayEquals([2, 2], pluck1([[0, 0], [0, 0]], 'length'));
assertArrayEquals([1, 3], pluck1([[1, 2], [3, 4]], '0'));

function pluck2(a, key) {
    return a.map(function(item) { return item[key]; });
};
assertArrayEquals([2, 2], pluck2(["ab", "cd"], 'length'));
assertArrayEquals(["a", "c"], pluck2(["ab", "cd"], '0'));

function pluck3(a, key) {
    return a.map(function(item) { return item[key]; });
};
f = function() { 1 };
f.prototype = g = function() { 2 };
assertArrayEquals([g, g], pluck3([f, f], 'prototype'));
assertArrayEquals([undefined, undefined], pluck3([f, f], '0'));
