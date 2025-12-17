function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

let a = 0n;
let b = 30n;
for (let i = 0; i < testLoopCount; i++) {
    a = b % 2n;
}

print(a === 0n);

