for (let forceFullParse of [true, false]) {
    print(Object.prototype.toString, evaluate(`{
            class C extends Object {
                f() {
                    let x = "toString";
                    return () => super[x];
                }
            }

            (new C).f()()
        }`, { forceFullParse }));

    print(Object.prototype.toString, evaluate(`{
            class C extends Object {
                f() {
                    let x = "toString";
                    return () => eval("super[x]");
                }
            }

            (new C).f()()
        }`, { forceFullParse }));

    print(Object.prototype.toString, evaluate(`{
            class C extends Object {
                f() {
                    let x = "toString";
                    return () => eval("() => super[x]");
                }
            }

            (new C).f()()()
        }`, { forceFullParse }));
}
