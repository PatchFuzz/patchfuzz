(function() {
  "use asm";
  return function() {
    for (var i = 0; i < 100000; delete unresolved_name) {++i}
    return 0;
  }
})()(this + "i");
