var table = [
    [NaN, 0, 0],
    [Infinity, Infinity, 0],
    [NaN, 1000, 0],

    [-1, -2, 2],
    [1, 2, 2],
    [-1, 2, -2],
    [1, -2, -2],
    [-0, 0, 0],
    [0, -0, 0],
    [-1, -0, 0],
    [1, -0, 0],

    [0xffffffff, 1, -1],

    [0xffffffff, 0xffffffff, 1],
    [0xffffffff, -0xffffffff, -1],
    [0xffffffff, 0xfffffffe, 2],
    [0xffffffff, -0xfffffffe, -2],
    [0x10000, 0x10000, 0],

    [{}, {}, 0],
    [[], [], 0],
    [{}, [], 0],
    [[], {}, 0],

    [{valueOf: function() { return -1; }}, 0x100000, -1048576],
    ["3", "-4", -12],
    [3.4, 6, 18]
];

try {
    Math.imul({ valueOf: function() { throw "ha ha ha"; } });
    print(true, false, "no error thrown");
} catch (e) {
    print(e, "ha ha ha");
}

var order = [];
print(Math.imul({ valueOf: function() { order.push("first"); return 0; } },
                   { valueOf: function() { order.push("second"); return 0; } }),
         0);
print(order[0], "first");
print(order[1], "second");

var seen = [];
try
{
    Math.imul({ valueOf: function() { seen.push("one"); return 17; } },
              { valueOf: function() { throw "abort!"; } });
    print(true, false, "no error thrown");
}
catch (e)
{
  print(e, "abort!", "should have thrown partway through, instead threw " + e);
}
print(seen.length, 1);
print(seen[0], "one");

print(Math.imul(), 0);
print(Math.imul(100), 0);
print(Math.imul(NaN, 100), 0);
print(Math.imul(NaN, NaN), 0);
print(Math.imul(5, Infinity), 0);

for (var i = 0; i < table.length; i++) {
    print(Math.imul(table[i][0], table[i][1]), table[i][2]);
    print(Math.imul(table[i][1], table[i][0]), table[i][2]);
}
