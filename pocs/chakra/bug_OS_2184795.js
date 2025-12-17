var x = [,,];
Object.preventExtensions(x);
try { new WeakMap(x); } catch (e) { }
print("passed");
