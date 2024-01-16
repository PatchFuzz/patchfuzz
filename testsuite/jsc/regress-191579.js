



var count = 0;

function bar() {
    new foo();
};

function foo() {
    if (count++ > 2000)
        return;
    let proxy = new Proxy({}, {
        set: function() {
            bar();
        }
    });
    try {
        Reflect.set(proxy);
        foo();
    } catch (e) {
    }
}

bar();
