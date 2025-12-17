a = newGlobal({ newCompartment: true });
Debugger(a).onEnterFrame = function () {};
this.__defineGetter__("foo", () => 5);
a.__defineGetter__("foo");
