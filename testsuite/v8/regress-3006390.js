


























function X() { }
X.prototype.valueOf = function () { return 7; }

function f(x, y) { return x % y; }

assertEquals(1, f(8, new X()));
