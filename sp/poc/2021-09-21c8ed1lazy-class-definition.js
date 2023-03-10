;




test = `
    function f1() {
        function f2() {
            function f3() {
                class C {
                    constructor() {
                        this.x = 42;
                    }
                }
                return new C;
            }
            return f3();
        }
        return f2();
    }
    if (generation >= 2) {
        print(f1().x, 42);
    }
`;
evalWithCache(test, {});



test = `
    function f1() {
        function f2() {
            function f3() {
                class C {
                    y = 12;

                    constructor() {
                        this.x = 42;
                    }
                }
                return new C;
            }
            return f3();
        }
        return f2();
    }
    if (generation >= 2) {
        print(f1().x, 42);
        print(f1().y, 12);
    }
`;
evalWithCache(test, {});
