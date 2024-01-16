




function shouldThrow() {
    shouldThrow(JSON.parse('{"0":1}'));
}
assertThrows("shouldThrow()", RangeError);
