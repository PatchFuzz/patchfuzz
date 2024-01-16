



let i = 0;

oomTest(Function(`
    if (i < 10) {
        i++;
        gczeal(15,1);
        foo;
    }
`));
