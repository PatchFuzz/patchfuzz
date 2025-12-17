for (var i = 2; i < 10; i++) {
    print(Math.min(i, 1), 1);
    print(Math.min(i, -1), -1);
    print(Math.min(1, i), 1);
    print(Math.min(-1, i), -1);
    print(Math.min(5, 2), 2);
    print(Math.min(2, 5), 2);
    print(Math.min(5, -2), -2);
    print(Math.min(-2, 5), -2);
}

for (i = 2; i < 10; i++) {
    print(Math.max(i, 1), i);
    print(Math.max(i, -1), i);
    print(Math.max(1, i), i);
    print(Math.max(-1, i), i);
    print(Math.max(5, -2), 5);
    print(Math.max(-2, 5), 5);
    print(Math.max(5, 2), 5);
    print(Math.max(2, 5), 5);
}

for (i = 2.1; i < 13; i += 3.17584) {
    print(Math.max(i, 1), i);
    print(Math.max(i, 1.5), i);
    print(Math.max(1, i), i);
    print(Math.max(1.5, i), i);
    
    print(Math.max(NaN, NaN), NaN);
    print(Math.max(NaN, Infinity), NaN);
    print(Math.max(Infinity, NaN), NaN);
    
    print(Math.max(NaN, i), NaN);
    print(Math.max(i, NaN), NaN);
    
    print(Math.max(i, Infinity), Infinity);
    print(Math.max(Infinity, i), Infinity);
    
    print(Math.max(i, -Infinity), i);
    print(Math.max(-Infinity, i), i);    
}

for (i = 2.1; i < 13; i += 3.17584) {
    print(Math.min(i, 1), 1);
    print(Math.min(i, 1.5), 1.5);
    print(Math.min(1, i), 1);
    print(Math.min(1.5, i), 1.5);
    
    print(Math.min(NaN, NaN), NaN);
    print(Math.min(NaN, Infinity), NaN);
    print(Math.min(Infinity, NaN), NaN);
    
    print(Math.min(NaN, i), NaN);
    print(Math.min(i, NaN), NaN);
    
    print(Math.min(i, Infinity), i);
    print(Math.min(Infinity, i), i);
    
    print(Math.min(i, -Infinity), -Infinity);
    print(Math.min(-Infinity, i), -Infinity);
}

function isNegZero(n) {
    return n === 0 && 1/n === -Infinity;
}

for (i = 0; i < 5; i++) {
    print(isNegZero(Math.min(0, -0)), true);
    print(isNegZero(Math.min(-0, 0)), true);
    print(isNegZero(Math.min(-0, -0)), true);
    print(isNegZero(Math.max(0, -0)), false);
    print(isNegZero(Math.max(-0, 0)), false);
    print(isNegZero(Math.max(-0, -0)), true);
}
