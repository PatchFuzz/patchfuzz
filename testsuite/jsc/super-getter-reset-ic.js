let assert = (a) => {
    if (!a)
        throw "Bad!";
}

let n = 200;

let A =  {
    c: 42
}

let C = {
    __proto__: A
}

let B = {
    __proto__: C,
    f(i) {
        return super.c;
    }
}

var result = 0;
for (var i = 0; i < n; ++i) {
    if (i == n / 2 ) {
        
        Object.defineProperty(A, "c", {get: () => 12});
    }
    result += B.f(i);
}

assert(result, 5400);

