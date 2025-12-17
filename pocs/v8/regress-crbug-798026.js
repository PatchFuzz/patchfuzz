array = new Array(4 * 1024 * 1024);
Set.prototype.add = value => {
  if (array.length != 1) {
    array.length = 1;
    gc();
  }
}
new Set(array);
