function foo(a0, a1) {
    if (a0) {
        for (let i=0; i<100; i++) {
            foo(a1);
            eval(...[]);
        }
    }
}

foo(1, 1);
