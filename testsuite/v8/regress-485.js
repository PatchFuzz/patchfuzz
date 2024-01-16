































var global = this;
var global2 = (function(){return this;})();
assertEquals(global, global2, "direct call to local function returns global");


var builtin2 = Object.prototype.toString;



assertTrue("[object builtins]" != builtin2(), "Direct call to toString");
assertTrue("[object builtins]" != builtin2.call(), "call() to toString");
assertTrue("[object builtins]" != builtin2.apply(), "call() to toString");
assertTrue("[object builtins]" != builtin2.call.call(builtin2),
           "call.call() to toString");
