Array.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

function f() {
    [] = []
}


for (let i = 0; i < 100; i++) {
    f();
}
