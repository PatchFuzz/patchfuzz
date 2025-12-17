function print(b) {
    if (!b)
        throw new Error("Bad assertion!");
}

const createCustom = `
    var custom = print();
`;

(function directCustomAccessorGet() {
    const other = runString(createCustom);
    const otherCustom = other.custom;

    for (let i = 0; i < testLoopCount; i++) {
        print(otherCustom.customAccessorGlobalObject === other);
    }
})();

(function directCustomValueGet() {
    const other = runString(createCustom);
    const otherCustom = other.custom;

    for (let i = 0; i < testLoopCount; i++) {
        print(otherCustom.customValueGlobalObject === other);
    }
})();

(function directCustomAccessorSet() {
    const other = runString(createCustom);
    const otherCustom = other.custom;

    for (let i = 0; i < testLoopCount; i++) {
        const value = {};
        otherCustom.customAccessorGlobalObject = value;
        print(value.result === other);
    }
})();

(function directCustomValueSet() {
    const other = runString(createCustom);
    const otherCustom = other.custom;

    for (let i = 0; i < testLoopCount; i++) {
        const value = {};
        otherCustom.customValueGlobalObject = value;
        print(value.result === other);
    }
})();

(function prototypeChainCustomAccessorGet() {
    const other = runString(createCustom);
    const otherCustomHeir = Object.create(other.custom);

    for (let i = 0; i < testLoopCount; i++) {
        print(otherCustomHeir.customAccessorGlobalObject === other);
    }
})();

(function prototypeChainCustomValueGet() {
    const other = runString(createCustom);
    const otherCustomHeir = Object.create(other.custom);

    for (let i = 0; i < testLoopCount; i++) {
        print(otherCustomHeir.customValueGlobalObject === other);
    }
})();

(function prototypeChainCustomAccessorSet() {
    const other = runString(createCustom);
    const otherCustomHeir = Object.create(other.custom);

    for (let i = 0; i < testLoopCount; i++) {
        const value = {};
        otherCustomHeir.customAccessorGlobalObject = value;
        print(value.result === other);
    }
})();
