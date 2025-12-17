var o = {foo: true};
with(o) {
    foo = 10;
}
print(o.foo, 10);
