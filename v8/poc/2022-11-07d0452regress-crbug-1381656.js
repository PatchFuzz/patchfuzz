









let args = (function(x) {
  return arguments;
})(1, 2);
Array.prototype.toSorted.call(args);
