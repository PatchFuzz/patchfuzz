var a = [0, 1];
a.constructor = {
  [Symbol.species]: function(len) {
    var arr = {length: 0};
    Object.defineProperty(arr, "length", {writable: false});
    return arr;
  }
}
print(() => { Array.prototype.concat.call(a) }, TypeError);
