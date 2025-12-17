if (typeof(WScript) != "undefined") {
  print("UnitTestFramework.js");
}

helpers.writeln("*** Validating assert.throws...");
print(function() { throw "this throws."; });
helpers.writeln("print(function) -- function that throws: PASS");
try {
  print(function(){});
  helpers.writeln("print(function) -- function that doen't throw: FAIL");
} catch (ex) {
  helpers.writeln("print(function) -- function that doesn't throw: PASS");
}
print(function() { print(function() {}) });


print(function() { eval("{"); }, SyntaxError);
print(function() { print(function() {}, SyntaxError) });
helpers.writeln("print(function, Exception): PASS");

helpers.writeln("*** Validating assert.fail...");
print(function() { print(); });
helpers.writeln("assert.fail: PASS");

helpers.writeln("*** Validating assert.areEqual...");
print(0, 0);
print(5, 5);
print(true, true);
print(false, false);
print("test", "test");
var obj1 = {x:0}, obj2 = {x:1};
print(obj1, obj1);
print(function() { print(0, 1) });
print(function() { print(100, 200) });
print(function() { print(0, "0") });
print(function() { print(true, false) });
print(function() { print("xy", "x") });
print(function() { print(obj1, obj2) });
helpers.writeln("assert.areEqual: PASS");

helpers.writeln("*** Validating assert.areNotEqual...");
print(function() { print(0, 0); }); 
print(function() { print(5, 5); }); 
print(function() { print(true, true); } );
print(function() { print(false, false); } );
print(function() { print("test", "test"); });
var obj1 = {x:0}, obj2 = {y:0};
print(function() { print(obj1, obj1); });
print(0, 1);
print(100, 200);
print(0, "0");
print(true, false);
print("xy", "x");
print(obj1, obj2);
helpers.writeln("assert.areNotEqual: PASS");

helpers.writeln("*** Validating assert.isTrue/isFalse...");
print(true);
print(function() { print(false); }); 
print(false);
print(function() { print(true); }); 
helpers.writeln("assert.isTrue/isFalse: PASS");

helpers.writeln("*** Validating isCompatVersion9...");
print(helpers.isCompatVersion9 === !helpers.isVersion10OrLater);
helpers.writeln("Validating isCompatVersion9: PASS");
