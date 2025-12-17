const obj = {
    [Symbol.replace]() {},
    a: '\u{D83D}\u{DE0A}'
};
const arr = [obj, obj];
print('[{"a":"😊"},{"a":"😊"}]', JSON.stringify(arr));
