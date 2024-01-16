load(libdir + 'asserts.js');


Function.prototype.toSource = null;

assertTypeErrorMessage(() => { new (function*() {}) },
                      "(function*() {}) is not a constructor");
