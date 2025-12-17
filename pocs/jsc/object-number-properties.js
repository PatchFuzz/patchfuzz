function print(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

var priceRanges = {
    "1": 0.6,
    "100": 0.45,
    "250": 0.3,
    "2000": 0.28
};

print(Object.keys(priceRanges).length, 4); 
print(Object.values(priceRanges).length, 4); 
print(priceRanges[1], 0.6); 
print(priceRanges[100], 0.45); 
print(priceRanges[250], 0.3); 
print(priceRanges[2000], 0.28); 

var ranges = {
    "250" : 0.5,
    "1000": 0.1
};

print(Object.keys(ranges).length, 2);
print(Object.values(ranges).length, 2);
print(ranges[250], 0.5);
print(ranges[1000], 0.1);

var r = {};

r[250] = 0.1;
r[1001] = 0.5;

print(Object.keys(r).length, 2);
print(Object.values(ranges).length, 2);

print(r[250], 0.1);
print(r[1001], 0.5);

var foo = {};

foo[100] = NaN;
foo[250] = 0.1;
foo[260] = NaN;
foo[1000] = 0.5;

print(Object.keys(foo).length, 4);
print(Object.values(foo).length, 4);
print(isNaN(foo[100]), true);
print(foo[250], 0.1);
print(isNaN(foo[260]), true);
print(foo[1000], 0.5);

var boo = function () {
    return {
        "250": 0.2,
        "1000": 0.1
    };
};

for (var i = 0; i < testLoopCount; i++) {
    const b = boo();
    const keys = Object.keys(b);
    const values = Object.values(b);

    print(keys.length, 2);
    print(values.length, 2);

    print(b[keys[0]], values[0]);
    print(b[keys[1]], values[1]);
}

var baz = {
    "250": "A",
    "1001": "B"
};

print(Object.keys(baz).length, 2);
print(Object.values(baz).length, 2);
print(baz[250], "A");
print(baz[1001], "B");

var bar = JSON.parse('{"0":97.1,"1000":96.5,"2000":96.1,"3000":97.4,"4000":90.4}');

print(Object.keys(bar).length, 5);
print(bar[0], 97.1);
print(bar[1000], 96.5);
print(bar[2000], 96.1);
print(bar[3000], 97.4);
print(bar[4000], 90.4);

bar = JSON.parse('{"0":97.1, "250": 65.3, "1000":96.5,"2000":96.1,"3000":97.4,"4000":90.4}');

print(Object.keys(bar).length, 6);

print(bar[0], 97.1);
print(bar[250], 65.3);
print(bar[1000], 96.5);
print(bar[2000], 96.1);
print(bar[3000], 97.4);
print(bar[4000], 90.4);

bar = JSON.parse('{"0":97.1, "250": null, "1000":96.5,"2000":96.1,"3000":97.4,"4000":90.4}');

print(Object.keys(bar).length, 6);

print(bar[0], 97.1);
print(bar[250], null);
print(bar[1000], 96.5);
print(bar[2000], 96.1);
print(bar[3000], 97.4);
print(bar[4000], 90.4);


bar = eval('(()=>({"0":97.1, "250": 65.3, "1000":96.5,"2000":96.1,"3000":97.4,"4000":90.4}))();');

print(Object.keys(bar).length, 6);

print(bar[0], 97.1);
print(bar[250], 65.3);
print(bar[1000], 96.5);
print(bar[2000], 96.1);
print(bar[3000], 97.4);
print(bar[4000], 90.4);

bar = eval('(()=>({"0":97.1, "250": null, "1000":96.5,"2000":96.1,"3000":97.4,"4000":90.4}))();');

print(Object.keys(bar).length, 6);

print(bar[0], 97.1);
print(bar[250], null);
print(bar[1000], 96.5);
print(bar[2000], 96.1);
print(bar[3000], 97.4);
print(bar[4000], 90.4);


bar = eval('(()=>({"0":97.1, "250": NaN, "1000":96.5,"2000":96.1,"3000":97.4,"4000":90.4}))();');

print(Object.keys(bar).length, 6);

print(bar[0], 97.1);
print(isNaN(bar[250]), true);
print(bar[1000], 96.5);
print(bar[2000], 96.1);
print(bar[3000], 97.4);
print(bar[4000], 90.4);
