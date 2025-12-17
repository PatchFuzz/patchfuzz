function print(a) {
    if (!a)
        throw new Error("Bad!")
}

function print(input) {
    try {
        let a = +input;
        print(false);
    } catch(e) {
        print(e instanceof TypeError);
    }
}

print(10n);
print(-10n);
print(Object(10n));
print(Object(-10n));

let obj = {
    [Symbol.toPrimitive]: function() {
        return 1n;
    },
    valueOf: function() {
        throw new Error("Should never be called");
    },
    toString: function() {
        throw new Error("Should never be called");
    }
};
print(obj);

obj = {
    valueOf: function() {
        return 1n;
    },
    toString: function() {
        throw new Error("Should never be called");
    }
};
print(obj);

obj = {
    toString: function() {
        return 1n;
    }
};
print(obj);

