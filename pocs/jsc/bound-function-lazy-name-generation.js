function print(b) {
    if (!b)
        throw new Error("Bad assertion!");
}

function test() {
    let f = function foo() { }.bind({});
    print(f.name === "bound foo");

    f = function () { }.bind({});
    print(f.name === "bound ");

    f = function foo() { }.bind({});
    print(Reflect.ownKeys(f).includes("name"));
    print(f.name === "bound foo");
    print(Reflect.ownKeys(f).includes("name"));

    f = function foo() { }.bind({});
    print(f.name === "bound foo");
    print(Reflect.ownKeys(f).includes("name"));
}
for (let i = 0; i < testLoopCount; i++)
    test();
