


serialize(evalcx("new Set(['x', 'y'])"));
serialize(evalcx("new Map([['x', 1]])"));

assertEq(deserialize(serialize(evalcx("new Set([1, 2, 3])"))).has(1), true);
assertEq(deserialize(serialize(evalcx("new Map([['x', 1]])"))).get('x'), 1);
