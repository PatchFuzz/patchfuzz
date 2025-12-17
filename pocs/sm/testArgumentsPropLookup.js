(function() {
    var s = "__proto__";
    print(arguments[s], Object.prototype);   
})();

Object.defineProperty(Object.prototype, "foo", {
    get:function() {
        this.bar = 42;
        return 41
    }
});

(function() {
    var s = "foo";
    print(arguments[s], 41);
    s = "bar";
    print(arguments[s], 42);
    print("bar" in Object.prototype, false);
})();
