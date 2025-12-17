function f() {
    return __proto__
}
f();
f();
print(!!f(), true);
