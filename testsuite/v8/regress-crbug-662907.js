





(function() {
  function foo() {
    var a = new Array();
    a[0] = 10;
    return a;
  }

  assertEquals(1, foo().length);

  gc();
  gc();
  gc();
  gc();

  
  
  
  Array.prototype.__defineSetter__("0", function() {});

  assertEquals(0, foo().length);
})();


(function() {
  function foo() {
    var a = new Array();
    a[0] = 10;
    return a;
  }

  
  Array.prototype[123456789] = 42;
  Array.prototype.length = 0;

  assertEquals(1, foo().length);

  gc();
  gc();
  gc();
  gc();

  
  
  Array.prototype.__defineSetter__("0", function() {});

  assertEquals(0, foo().length);
})();
