;


Function.prototype.toSource = null;

print(() => { new (function*() {}) },
                      "(function*() {}) is not a constructor");
