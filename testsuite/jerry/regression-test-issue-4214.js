













var called = false; Promise.resolve('d').finally((v) => called = true);

function __checkAsync() {
    assert(called);
}
