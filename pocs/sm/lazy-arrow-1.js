function f() {
    let z = (a = (() => 10),
             b = (() => 20)) => {
        return [a, b];
    }

    function g() {
        return 30;
    }

    return [...z(), g];
}

let [a, b, c] = f();

print(a(), 10);
print(b(), 20);
print(c(), 30);
