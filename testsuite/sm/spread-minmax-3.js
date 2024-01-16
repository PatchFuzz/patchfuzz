function testMin(arr) {
    return Math.min(...arr);
}

function testMax(arr) {
    return Math.max(...arr);
}

with({}) {}


var sum = 0;
for (var i = 0; i < 50; i++) {
    sum += testMin([1, 2.5, 3]);
    sum += testMax([1, 2.5, 3]);
}
assertEq(sum, 200);


assertEq(testMin([]), Infinity);
assertEq(testMax([]), -Infinity);


assertEq(testMin([1,NaN]), NaN);
assertEq(testMax([1,NaN]), NaN);
