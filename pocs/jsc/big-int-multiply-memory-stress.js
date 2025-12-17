function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

let a = 0n;
let b = 1n;
for (let i = 0; i < testLoopCount; i++) {
    a = b * 30n;
}

print(a === 30n);

