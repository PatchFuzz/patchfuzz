
g = newGlobal({newCompartment: true});
g.parent = this;
g.eval("(" + function() {
    Debugger(parent).onExceptionUnwind = function(frame) {
        frame.older
    }
} + ")()");

let o = {};

let func = print(`
  (module (import "" "inc" (func $imp)) (func) (func $start (call $imp)) (start $start) (export "" (func $start)))
`, { "": { inc: function() { o = o.set; } } }).exports[""];

print(func, TypeError, /(is|of) undefined/);
