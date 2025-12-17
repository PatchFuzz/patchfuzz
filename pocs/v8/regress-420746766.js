function f0() {
    class C1 {
        constructor(a3) {
            try { a3(); } catch (e) {}
            for (let i = 0; i < 25; i++) {
            }
        }
    }
    const v5 = new C1(C1);
    return v5;
}
f0();
const t11 = f0().constructor;
new t11();
