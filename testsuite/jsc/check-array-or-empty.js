
class C extends Object {
    constructor(beforeSuper) {
        let f = () => {
            for (let j = 0; j < 100; j++) {
                try {
                    this[0] = {};
                } catch (e) {
                }
            }
        };
        if (beforeSuper) {
            f();
            super();
        } else {
            super();
            f();
        }
    }
}
for (let i = 0; i < 100; i++) {
    new C(false);
    new C(true);
}
