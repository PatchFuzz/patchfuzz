print(Math.hypot(), +0);



for (var inf of [Infinity, -Infinity]) {
    print(Math.hypot(inf, 0), Infinity);
    print(Math.hypot(0, inf), Infinity);
    print(Math.hypot(inf, inf), Infinity);
    print(Math.hypot(inf, -inf), Infinity);

    print(Math.hypot(inf, -0), Infinity);
    print(Math.hypot(-0, inf), Infinity);
    print(Math.hypot(inf, Math.MIN_VALUE), Infinity);
    print(Math.hypot(Math.MIN_VALUE, inf), Infinity);
    print(Math.hypot(inf, 1), Infinity);
    print(Math.hypot(1, inf), Infinity);

    print(Math.hypot(inf, 0, 0), Infinity);
    print(Math.hypot(0, inf, 0), Infinity);
    print(Math.hypot(0, 0, inf), Infinity);

    print(Math.hypot(inf, NaN), Infinity);
    print(Math.hypot(NaN, inf), Infinity);

    print(Math.hypot(inf, NaN, NaN), Infinity);
    print(Math.hypot(NaN, inf, NaN), Infinity);
    print(Math.hypot(NaN, NaN, inf), Infinity);

    print(Math.hypot(inf, NaN, NaN, NaN), Infinity);
    print(Math.hypot(NaN, inf, NaN, NaN), Infinity);
    print(Math.hypot(NaN, NaN, inf, NaN), Infinity);
    print(Math.hypot(NaN, NaN, NaN, inf), Infinity);
}


print(Math.hypot(NaN), NaN);

print(Math.hypot(NaN, 0), NaN);
print(Math.hypot(0, NaN), NaN);

print(Math.hypot(NaN, NaN), NaN);

print(Math.hypot(NaN, 0, 0), NaN);
print(Math.hypot(0, NaN, 0), NaN);
print(Math.hypot(0, 0, NaN), NaN);

print(Math.hypot(NaN, 0, 0, 0), NaN);
print(Math.hypot(0, NaN, 0, 0), NaN);
print(Math.hypot(0, 0, NaN, 0), NaN);
print(Math.hypot(0, 0, 0, NaN), NaN);

print(Math.hypot(Number.MAX_VALUE, Number.MIN_VALUE, NaN), NaN);
print(Math.hypot(Number.MAX_VALUE, Number.MIN_VALUE, Number.MIN_VALUE, NaN), NaN);


print(Math.hypot(-0, -0), +0);
print(Math.hypot(+0, -0), +0);

print(Math.hypot(-0, -0, -0), +0);
print(Math.hypot(+0, -0, -0), +0);
print(Math.hypot(-0, +0, -0), +0);
print(Math.hypot(+0, +0, -0), +0);

print(Math.hypot(-0, -0, -0, -0), +0);
print(Math.hypot(+0, -0, -0, -0), +0);
print(Math.hypot(-0, -0, +0, -0), +0);
print(Math.hypot(+0, +0, +0, -0), +0);
print(Math.hypot(-0, -0, -0, +0), +0);


print(Math.hypot.length, 2);
