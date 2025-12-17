function print(x) {
    if (!x)
        throw new Error("Bad assertion!");
}

(function() {
    {
        function* foo() {}

        if (true) {
            function* bar() {}
        }
    }

    print(typeof foo === "undefined");
    print(typeof bar === "undefined");
})();

eval(`
    if (true) {
        function* foo1() {}
    }

    {
        function* bar1() {}
    }
`);

print(!globalThis.hasOwnProperty("foo1"));
print(!globalThis.hasOwnProperty("bar1"));
