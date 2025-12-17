function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

let a = 0n;
for (let i = 0; i < testLoopCount; i++) {
    a += 30n;
}

print(a === 30n * BigInt(testLoopCount));

