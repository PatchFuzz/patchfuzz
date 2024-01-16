



(function() {
  "use asm";
  return function(x) {
    for (var i = 0; i < 100000; ++i) {}
    return x;
  }
})()(this + "i");
