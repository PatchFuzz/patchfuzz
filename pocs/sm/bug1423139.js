var c = 0;
for (var i = 0; i < 5; i++) {
    try {
        Object.defineProperty([], "length", {
            configurable: true,
            enumerable: true,
            writable: true,
            value: 0
        });
    } catch (e) {
        print(e instanceof TypeError, true);
        c++;
    }
}
print(c, i);
