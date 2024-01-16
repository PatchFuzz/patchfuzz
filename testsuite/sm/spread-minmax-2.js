function testMin(arr) {
    var sum = 0;
    for (var i = 0; i < 50; i++) {
	sum += Math.min(...arr);
    }
    return sum;
}

function testMax(arr) {
    var sum = 0;
    for (var i = 0; i < 50; i++) {
	sum += Math.max(...arr);
    }
    return sum;
}


assertEq(testMin([1,2,3,4,5]), 50);
assertEq(testMax([1,2,3,4,5]), 250);


assertEq(testMin([1,2,3.5,4,5]), 50);
assertEq(testMax([1,2,3.5,4,5]), 250);
