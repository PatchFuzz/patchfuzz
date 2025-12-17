function foo(count) {
    const x = createGlobalObject();
    if (count === 100)
        return;
    return foo(count + 1);
}
foo(0);
