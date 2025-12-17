(function() {
    function check(p) { return p.x; }

    let a = { x: "a" };
    let b = { __proto__: a };
    let c = { __proto__: b };
    let d = { __proto__: c };

    print(check(d), "a");
    print(check(d), "a");
    d.x = "d";
    print(check(d), "d");
})();


(function() {
    function check(p) { return p.x; }

    let a = { x: "a" };
    let b = { __proto__: a };
    let c = { __proto__: b };
    let d = { __proto__: c };

    print(check(d), "a");
    print(check(d), "a");
    c.x = "c";
    print(check(d), "c");
})();


(function() {
    function check(p) { return p.x; }

    let a = { x: "a" };
    let b = { __proto__: a };
    let c = { __proto__: b };
    let d = { __proto__: c };

    print(check(d), "a");
    print(check(d), "a");
    d.__proto__ = { x: "?" };
    print(check(d), "?");
})();


(function() {
    function check(p) { return p.x; }

    let a = { x: "a" };
    let b = { __proto__: a };
    let c = { __proto__: b };
    let d = { __proto__: c };

    print(check(d), "a");
    print(check(d), "a");
    c.__proto__ = { x: "?" };
    print(check(d), "?");
})();


(function() {
    function check(p) { return p.x; }

    function Base() { this.x = "a"; }
    let a = new Base;
    a.__proto__ = new Object;
    let b = { __proto__: a };
    let c = { __proto__: b };
    let d = { __proto__: c };

    print(check(d), "a");
    print(check(d), "a");
    b.__proto__ = { x: "?" };
    print(check(d), "?");
})();


(function() {
    function check(p) { return p.x; }

    function Base() { this.x = "a"; }
    function Node() { }

    let a = new Base;
    let b = new Node; b.__proto__ = a;
    let c = { __proto__: b };
    let d = { __proto__: c };

    print(check(d), "a");
    print(check(d), "a");
    b.__proto__ = { x: "?" };
    print(check(d), "?");
})();


(function() {
    function check(p) { return p.x; }

    function Base() { this.x = "a"; }
    function Node() { }

    let a = new Base;
    let b = { __proto__: a };
    let c = { __proto__: b };
    let d = new Node; d.__proto__ = c;

    print(check(d), "a");
    print(check(d), "a");
    d.__proto__ = { x: "?" };
    print(check(d), "?");
})();


(function() {
    function check(p) { return p.x; }

    function Base() { this.x = "a"; }
    function Node() { }

    let a = new Base;
    let b = new Node; b.__proto__ = a;

    print(check(b), "a");
    print(check(b), "a");
    b.__proto__ = { x: "?" };
    print(check(b), "?");
})();
