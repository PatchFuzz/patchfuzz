class Outer {
    static {
        eval(`
            function staticfunc() {
                arguments;
            }

            class Inner {
            }
        `);
    }
}
