var called = false;
var a = [, undefined, {
    toString() {
        if (!called) {
            called = true;
            a.length = 3;
            Object.defineProperty(a, "length", {writable:false});
        }
        return 0;
    }
}, 0];
a.sort();

print(a.length, 3);
print(a[1], 0);
print(a[2], undefined);
