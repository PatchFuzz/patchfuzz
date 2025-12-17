let called = false
class base {
    set x(arg) {
        called = true;
    }
    get x() {
        called = true;
        return 0;
    }
}

class c extends base {
    x = 2;
}
print(new c().x, 2);

class d extends base {
    ["x"] = 2;
}
print(new d().x, 2);

print(called, false);

if (typeof reportCompare === "function")
  reportCompare(true, true);
