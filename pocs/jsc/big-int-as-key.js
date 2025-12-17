function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

let o = {};
let n = BigInt(0);

o[n] = "foo";
print(o[n] === "foo");
print(o["0"] === "foo");

