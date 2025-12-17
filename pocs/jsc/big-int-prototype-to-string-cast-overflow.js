function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

function print(input) {
    try {
        let number = 3n;
        number.toString(input);
        print(false);
    } catch (e) {
        print(e instanceof RangeError);
    }
}

print(1e100);
print(-1e101);

