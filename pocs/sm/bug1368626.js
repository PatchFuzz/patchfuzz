var sandbox = evalcx("lazy");




var err;
try {
    Object.defineProperty(sandbox, "lazy", {
        get() {
            Object.defineProperty(sandbox, "foo", { value: 0 });
        }
    });
} catch (e) {
    err = e;
}
print(err instanceof TypeError, true);


sandbox.foo = 1;
