var foo = function() { 0;  };
var bar = function() { 1;  };
var baz = function() { 2;  };

var test = foo.test = bar.test = baz;

print(baz, test);
print(baz, foo.test);
print(baz, bar.test);
