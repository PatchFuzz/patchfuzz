var assert = {
    sameValue: function (input, expected) {
        if (input !== expected)
            throw new Error('Expected: ' + expected + ' but got: ' + input);
    }
};

var x = {y:1n}
print(x.y, 1n);

x = {y:{z:1n}};
print(x.y.z, 1n);

x = {y:-1212n}
print(x.y, -1212n);

x = {y:{z:-22312n}};
print(x.y.z, -22312n);

