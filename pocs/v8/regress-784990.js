const key1 = {};
const key2 = {};

const set = new Set([, 1]);
print(set.has(undefined), true);
print(set.has(1), true);

const doubleSet = new Set([,1.234]);
print(doubleSet.has(undefined), true);
print(doubleSet.has(1.234), true);

const map = new Map([[, key1], [key2, ]]);
print(map.get(undefined), key1);
print(map.get(key2), undefined);

const doublesMap = new Map([[, 1.234]]);
print(doublesMap.get(undefined), 1.234);

const weakmap = new WeakMap([[key1, ]]);
print(weakmap.get(key1), undefined);

print(() => new WeakSet([, {}]));
print(() => new WeakSet([, 1.234]));
print(() => new Map([, [, key1]]));
print(() => new WeakMap([[, key1]]));
print(() => new WeakMap([, [, key1]]));
