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


print(testMin([1,2,3,4,5]), 50);
print(testMax([1,2,3,4,5]), 250);


print(testMin([1,2,3.5,4,5]), 50);
print(testMax([1,2,3.5,4,5]), 250);
