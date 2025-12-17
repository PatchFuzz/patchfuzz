function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

let a = 0b11n;
for (let i = 0; i < testLoopCount; i++) {
    a ^= 0b01n;
}

print(a === 0b11n);

