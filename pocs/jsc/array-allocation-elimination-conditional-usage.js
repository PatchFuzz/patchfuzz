function print(condition, message) {
    if (!condition)
        throw new Error(message || "Assertion failed");
}


function testConditionalArrayUsage(useArray, writeValue) {
    const arr = new Array(5);

    if (useArray) {
        
        arr[0] = writeValue;
        arr[2] = writeValue + 10;
        arr[4] = writeValue + 20;

        let sum = 0;
        for (let i = 0; i < 5; i++) {
            if (arr[i] !== undefined) {
                sum += arr[i];
            }
        }
        return sum;
    } else {
        
        return writeValue * 3 + 30; 
    }
}


function testNestedConditionalArray(outer, inner, value) {
    const arr = new Array(3);

    if (outer) {
        arr[0] = value;

        if (inner) {
            arr[1] = value * 2;
            arr[2] = value * 3;
            return arr[0] + arr[1] + arr[2]; 
        } else {
            
            return arr[0]; 
        }
    } else {
        
        return inner ? value * 6 : value;
    }
}


function testEarlyReturnArray(shouldReturn, value) {
    const arr = new Array(4);

    if (shouldReturn) {
        return value * 42;
    }

    
    arr[0] = value;
    arr[1] = value + 1;
    arr[3] = value + 3;

    return arr[0] + arr[1] + arr[3]; 
}

noInline(testConditionalArrayUsage);
noInline(testNestedConditionalArray);
noInline(testEarlyReturnArray);


for (let i = 0; i < testLoopCount; i++) {
    
    let result1 = testConditionalArrayUsage(true, i % 100);
    let expected1 = (i % 100) + (i % 100 + 10) + (i % 100 + 20);
    print(result1 === expected1, `testConditionalArrayUsage(true, ${i % 100}) failed: got ${result1}, expected ${expected1}`);

    
    let result2 = testConditionalArrayUsage(false, i % 100);
    let expected2 = (i % 100) * 3 + 30;
    print(result2 === expected2, `testConditionalArrayUsage(false, ${i % 100}) failed: got ${result2}, expected ${expected2}`);

    
    let val = i % 10;

    
    let result3 = testNestedConditionalArray(true, true, val);
    print(result3 === val * 6, `testNestedConditionalArray(true, true, ${val}) failed: got ${result3}, expected ${val * 6}`);

    
    let result4 = testNestedConditionalArray(true, false, val);
    print(result4 === val, `testNestedConditionalArray(true, false, ${val}) failed: got ${result4}, expected ${val}`);

    
    let result5 = testNestedConditionalArray(false, true, val);
    print(result5 === val * 6, `testNestedConditionalArray(false, true, ${val}) failed: got ${result5}, expected ${val * 6}`);

    
    let result6 = testNestedConditionalArray(false, false, val);
    print(result6 === val, `testNestedConditionalArray(false, false, ${val}) failed: got ${result6}, expected ${val}`);

    
    let result7 = testEarlyReturnArray(true, val);
    print(result7 === val * 42, `testEarlyReturnArray(true, ${val}) failed: got ${result7}, expected ${val * 42}`);

    let result8 = testEarlyReturnArray(false, val);
    let expected8 = val * 3 + 4;
    print(result8 === expected8, `testEarlyReturnArray(false, ${val}) failed: got ${result8}, expected ${expected8}`);
}
