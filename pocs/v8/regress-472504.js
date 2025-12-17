function shouldThrow() {
    shouldThrow(JSON.parse('{"0":1}'));
}
print("shouldThrow()", RangeError);
