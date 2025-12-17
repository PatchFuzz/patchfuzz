class Y {
    a() {
        print(this.__proto__, X.prototype);
        return 1;
    }
    b() {
        print(this.__proto__, X.prototype);
        return 2;
    }
}

class X extends Y {
    a() { throw "not invoked"; }
    b() {
        return super.a() + super.b();
    }
    c(i) {
        var a, b;

        if (i % 2) {
            a = "a";
            b = "b"
        } else {
            a = "b";
            b = "a";
        }

        return super[a]() + super[b]();
    }
}

function simple() {
    var x = new X();
    print(x.b(), 3);
    print(x.c(), 3);
}

class A {
    b() { return 1;}
}
class B extends A {
    a() {
        print(super.b(), 1);
    }
}

function nullHomeObjectSuperBase(i) {
    var b = new B();
    if (i == 500) {
        Object.setPrototypeOf(B.prototype, null);
        
    }
    b.a();
}

class SArray extends Array {
    constructor() {
        super("a", "b");
    }

    a() {
        print(super.length, 0);
        print(this.length, 2);

        print(this[0], "a");
        print(this[1], "b");

        print(super[0], undefined);
        print(super[1], undefined);
    }
}

function array() {
    var s = new SArray();
    s.a();
}

for (var i = 0; i < 1e4; i++) {
    simple();
    array();

    try {
        nullHomeObjectSuperBase(i);
    } catch (e) {
        print(i >= 500, true);
    }
}
