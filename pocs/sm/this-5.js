Number.prototype.foo = function() {
    "use strict";
    return () => this;
}

for (var i=0; i<5; i++) {
    var n = i.foo()();
    print(typeof n, "number");
    print(n, i);
}
