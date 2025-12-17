gc();
gc();
print("[object Object]", Object.prototype.toString.call({}));
gc();
print("[object Array]", Object.prototype.toString.call([]));
