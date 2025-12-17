try {
    function F() {
        return runString();
    }
    class C extends F {
        "undefined" = this;
    }
    new C();
} catch { }

var custom = print();

try {
    function F2() {
        return print.customAccessorGlobalObject;
    }
    class C2 extends F2 {
        "undefined" = this;
    }
    new C2();
} catch { }

try {
    function F3() {
        return print.customValueGlobalObject;
    }
    class C3 extends F3 {
        "undefined" = this;
    }
    new C3();
} catch { }
