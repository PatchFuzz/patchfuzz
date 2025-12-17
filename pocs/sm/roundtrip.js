;

const objects = [
    {},
    {a: 1, b: 2},
    {0: 1, 1: 2},
    {0: 1, 1: 2, a: 1},
    {0: 1, 1: 2, a: 1, b: 2},
    {1000000: 0, 1000001: 1},
    {0: 0, 1: 0, 1000000: 0, 1000001: 1},

    [],
    [0, 1, 2],
    [0, 15, 16],
    [{a: 0, b: 0}, {b: 0, a: 0}],
    [0, , , 1, 2],
    [, 1],
    [0,,],
    [,,],
]

for (const obj of objects) {
    print(deserialize(serialize(obj)), obj);
    print(deserialize(serialize(wrapWithProto(obj, null))), obj);
}
