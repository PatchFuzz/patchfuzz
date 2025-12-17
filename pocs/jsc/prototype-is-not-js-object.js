function foo() {
    function bar() {
        this.x = 42;
    }
    bar.prototype = 50;
    return new bar();
}

function print(b) {
    if (!b)
        throw new Error("Bad");
}

let items = [
    foo(),
    foo(),
    foo(),
    foo(),
    foo(),
    foo(),
];

function validate(item) {
    print(item.notThere === undefined);
    print(item.x === 42);
    print(item.__proto__ === Object.prototype);
}

for (let i = 0; i < testLoopCount; ++i) {
    for (let item of items)
        validate(item);
}
