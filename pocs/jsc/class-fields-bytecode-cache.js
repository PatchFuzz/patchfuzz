function print(a, e) {
    if (a !== e)
        throw new Erro("Expected: " + e + " but got: " + a);
}

class C{
    foo() {
        return this.f;
    }

    f = 15;
}

let c = new C();
let r = c.foo();
print(r, 15);

