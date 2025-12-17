let arr = [, 0.1];

Array.prototype.lastIndexOf.call(arr, 100, {
  valueOf() {
    arr.length = 0;
  }
});
