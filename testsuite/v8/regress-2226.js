


























var foo = function() { 0;  };
var bar = function() { 1;  };
var baz = function() { 2;  };

var test = foo.test = bar.test = baz;

assertEquals(baz, test);
assertEquals(baz, foo.test);
assertEquals(baz, bar.test);
