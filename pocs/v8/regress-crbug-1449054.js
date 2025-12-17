class C1 {
    constructor(a3) {
        class C6 extends C1 {
            [this] = undefined;
            static 1 = a3;
            static {
               super.p();
            }
        }
    }
}
print(() => new C1(), TypeError);
