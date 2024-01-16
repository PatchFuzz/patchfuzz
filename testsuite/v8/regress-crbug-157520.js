




























(function(){
  var f = function(arg) {
    arg = 2;
    return arguments[0];
  };
  for (var i = 0; i < 50000; i++) {
    assertSame(2, f(1));
  }
})();
