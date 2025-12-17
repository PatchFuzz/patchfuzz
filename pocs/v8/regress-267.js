var global = (function(){ return this; })();
function taint(fn){var v = fn(); eval("taint"); return v; }
function getThis(){ return this; }
var obj = taint(getThis);

print(global, obj, "Should be the global object.");
