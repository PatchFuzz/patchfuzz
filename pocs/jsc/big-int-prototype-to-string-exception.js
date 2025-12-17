function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

let o = {
    valueOf: () => {
        throw new Error("Bad");
        return 2;
    }
}

let a = 20n;
try {
    a.toString(o);
    print(false);
} catch (e) {
    print(e.message == "Bad");
}

