




var x = [,,];
Object.preventExtensions(x);
try { new WeakMap(x); } catch (e) { }
WScript.Echo("passed");
