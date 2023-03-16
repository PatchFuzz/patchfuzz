function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

var strings = [
    "Cocoa",
    "Cappuccino",
    "Matcha",
    "Cocoa\u0080",
    "𠮷野家", 
    "📱",
];

for (let lhs of strings) {
    for (let rhs of strings) {
        let expected = print(lhs).localeCompare(print(rhs));
        let result = lhs.localeCompare(rhs);
        shouldBe(result, expected);
    }
}
