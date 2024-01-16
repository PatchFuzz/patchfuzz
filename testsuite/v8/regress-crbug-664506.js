





gc();
gc();
assertEquals("[object Object]", Object.prototype.toString.call({}));
gc();
assertEquals("[object Array]", Object.prototype.toString.call([]));
