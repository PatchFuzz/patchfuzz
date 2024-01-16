function testArrayInWithIndexedProto()
{
    Array.prototype[0] = "Got me";
    var zeroPresent, zeroPresent2;
    
    
    
    
    for (var j = 0; j < 18; ++j) {
	zeroPresent = 0 in [];
    }

    var arr = [1, 2];
    delete arr[0];
    for (var j = 0; j < 18; ++j) {
	zeroPresent2 = 0 in arr;
    }
    return [zeroPresent, zeroPresent2];
}

var [ret, ret2] = testArrayInWithIndexedProto();
assertEq(ret, true);
assertEq(ret2, true);

