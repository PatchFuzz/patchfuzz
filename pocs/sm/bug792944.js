function whoo() {
    (new Object()).foo()
}
Object.prototype.foo = function() { return undefined };
whoo();
Object.prototype.foo = undefined;
gc();
try {
    whoo();
    print(0, 1);
} catch(e) {
    print(e instanceof TypeError, true);
}
