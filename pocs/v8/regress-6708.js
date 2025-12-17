var a = [0, 1];
a.constructor = {
  [Symbol.species]: function(len) {
    var arr = Array(20);
    return arr;
  }
};
print([0, 1], Array.prototype.concat.call(a));
