function print(v, e, m) {
    if (v !== e)
        throw new Error(m);
}

print(Object(2n) <= 1n, false, "Object(2n) <= 1n");
print(1n <= Object(2n), true, "1n <= Object(2n)");
print(Object(2n) <= Object(1n), false, "Object(2n) <= Object(1n)");
print(Object(1n) <= Object(2n), true, "Object(1n) <= Object(2n)");

let o = {
    [Symbol.toPrimitive]: function() {
        return 2n;
    }
}

let o2 = {
    [Symbol.toPrimitive]: function() {
        return 1n;
    }
}

print(o <= 1n, false, "ToPrimitive(2n) <= 1n");
print(1n <= o, true, "1n <= ToPrimitive(2n)");
print(o <= o2, false, "ToPrimitive(2n) <= ToPrimitive(1n)");
print(o2 <= o, true, "ToPrimitive(1n) <= ToPrimitive(2n)");

o = {
    valueOf: function() {
        return 2n;
    }
}

o2 = {
    valueOf: function() {
        return 1n;
    }
}

print(o <= 1n, false, "ToPrimitive(2n) <= 1n");
print(1n <= o, true, "1n <= ToPrimitive(2n)");
print(o <= o2, false, "ToPrimitive(2n) <= ToPrimitive(1n)");
print(o2 <= o, true, "ToPrimitive(1n) <= ToPrimitive(2n)");

o = {
    toString: function() {
        return 2n;
    }
}

o2 = {
    toString: function() {
        return 1n;
    }
}

print(o <= 1n, false, "ToPrimitive(2n) <= 1n");
print(1n <= o, true, "1n <= ToPrimitive(2n)");
print(o <= o2, false, "ToPrimitive(2n) <= ToPrimitive(1n)");
print(o2 <= o, true, "ToPrimitive(1n) <= ToPrimitive(2n)");

