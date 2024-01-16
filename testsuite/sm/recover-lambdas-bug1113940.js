
gczeal(14);








enableShellAllocationMetadataBuilder(function() {});
function f() {
    (function() {
        '' ^ Object
    })();
}
x = 0;
for (var j = 0; j < 99; ++j) {
    x += f();
}

try {
  x = true;
  
  enableShellAllocationMetadataBuilder(function([x, y, z], ... Debugger) {});
  for (var i = 0; i < 10; ++i) {
    var f = function() {
      function g() {
	x++;
      }
      g();
    }
    f();
  }
} catch (e) {
  assertEq(e instanceof TypeError, true);
}
