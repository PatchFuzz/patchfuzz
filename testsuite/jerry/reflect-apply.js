













assert (Reflect['apply'](Math.floor, undefined, [1.75]) === 1);
assert (Reflect['apply'](String.fromCharCode, undefined, [104, 101, 108, 108, 111]) === "hello");
assert (Reflect['apply'](RegExp.prototype.exec, /ab/, ['confabulation']).index === 4);
assert (Reflect['apply'](''.charAt, 'ponies', [3]) === "i");
