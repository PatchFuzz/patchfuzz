serialize(evalcx("new Set(['x', 'y'])"));
serialize(evalcx("new Map([['x', 1]])"));

print(deserialize(serialize(evalcx("new Set([1, 2, 3])"))).has(1), true);
print(deserialize(serialize(evalcx("new Map([['x', 1]])"))).get('x'), 1);
