var counter = 0;
function inc() { return counter++ }
var imp = { inc:inc };

function FFI1(stdlib, foreign) {
    "use asm";

    var inc = foreign.inc;

    function g() {
      return inc()|0
    }

    return g
}

function FFI2(stdlib, foreign) {
    "use asm";

    var inc=foreign.inc;

    function g() {
      inc()
    }

    return g
}


var f = FFI2(this, imp);     
f()
print(counter, 1);

var f = FFI1(this, imp);     

print(f(), 1);
print(counter, 2);
print(f(), 2);
print(counter, 3);
