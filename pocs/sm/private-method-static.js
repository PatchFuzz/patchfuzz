class B {
    static #smethod() {
        return 14;
    }

    static f() {
        return this.#smethod();
    }
}
print(B.f(), 14);



class OuterStatic {
    static #outerMethod() { return "ok"; }

    static test() {
        class Inner {
            #innerMethod() { }
            static test(outer) {
                return outer.#outerMethod();
            }
        }
        return Inner.test(this);
    }
}
print(OuterStatic.test(), "ok");