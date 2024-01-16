








Object.keys(this).forEach(function (p) {
    Object.defineProperty(this, p, { enumerable: false });
});
Object.defineProperty(this, "__saved__proto__desc", {
    value: Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"),
    enumerable: false,
});

(function () {
    arguments = null;
    this; 

    Object.defineProperty(Object.prototype, "__proto__", { get: function () { } });
    this; 

    Object.defineProperty(Object.prototype, "__proto__", { get: __saved__proto__desc.get });
    this; 

    Object.defineProperty(Object.prototype, "__proto__", { set: function () { } });
    this; 

    Object.defineProperty(Object.prototype, "__proto__", { set: __saved__proto__desc.set });
    this; 

    Object.defineProperty(Object.prototype, "__proto__", {
        get: function () { return __saved__proto__desc.get.apply(this); },
        set: function (p) { return __saved__proto__desc.set.apply(this, [p]); },
    });
    this.__proto__ = { pp2: 2 };
    this; 

    Object.defineProperty(Object.prototype, "__proto__", { value: 123 });
    this; 

    Object.defineProperty(Object.prototype, "__proto__", __saved__proto__desc);
    this; 

}).apply({ thisp: 1, __proto__: { protop: 123 } });

WScript.Echo("pass");
