function print(a, message) {
    if (!a)
        throw new Error(message);
}

class A {
    foo = function() { };
    bar = class {};
    baz = "test";
}

var a = new A();
print(a.foo.name == "foo");
print(a.bar.name == "bar");
print(a.baz.name == undefined);
