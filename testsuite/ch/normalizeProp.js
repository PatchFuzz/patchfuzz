




var o = { blah: "abc" }
Object.defineProperty(o, 'hello', {
    get: function() { return 42; },
    set: function() { },
    enumerable: true
})

for (var p in o) {
    print(p.normalize())
}

print("PASS")
