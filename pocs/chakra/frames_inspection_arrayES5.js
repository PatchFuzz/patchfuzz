try {
    e++;
} catch (e) {
    with ({ o: 2 }) {
        var arr = [];
        arr.push(1);

        arr.forEach(function (key, val, map) {
            key;
        });
    }
}
print('PASSED');
