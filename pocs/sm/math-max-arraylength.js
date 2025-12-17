var arrays = [
    [],
    [1],
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4],
];

function test() {
    for (var i = 0; i < arrays.length; i++) {
        var array = arrays[i];

        print(Math.max(array.length, 0), i);
        print(Math.max(0, array.length), i);

        print(Math.max(array.length, -1), i);
        print(Math.max(-1, array.length), i);

        print(Math.max(array.length, -1.5), i);
        print(Math.max(-1.5, array.length), i);
    }
}

test();
test();
