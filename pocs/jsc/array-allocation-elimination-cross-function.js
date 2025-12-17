function print(condition, message) {
    if (!condition)
        throw new Error(message || "Assertion failed");
}


function allocateArray(size, fillValue) {
    const arr = new Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = fillValue + i;
    }
    return arr;
}


function processArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * 2;
    }
    return sum;
}


function modifyArray(arr, multiplier) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= multiplier;
    }
}


let globalArray = null;
function escapeArray(arr) {
    globalArray = arr;
    return arr.length;
}
noInline(escapeArray);


function allocateAndUse(size, value) {
    const arr = allocateArray(size, value);
    return processArray(arr);
}


function allocateModifyAndUse(size, value) {
    const arr = allocateArray(size, value);
    modifyArray(arr, 3);
    return processArray(arr);
}


function conditionalEscape(shouldEscape, size, value) {
    const arr = allocateArray(size, value);

    if (shouldEscape) {
        return escapeArray(arr);
    } else {
        return processArray(arr);
    }
}


function chainedProcessing(size, value) {
    function step1(arr) {
        
        for (let i = 0; i < arr.length; i++) {
            arr[i] *= 2;
        }
        return arr;
    }

    function step2(arr) {
        
        for (let i = 0; i < arr.length; i++) {
            arr[i] += i;
        }
        return arr;
    }

    function step3(arr) {
        
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    const initial = allocateArray(size, value);
    const after1 = step1(initial);
    const after2 = step2(after1);
    return step3(after2);
}


function nestedAllocation(size, value) {
    function innerAllocate() {
        return new Array(size).fill(value);
    }

    const arr = innerAllocate();
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}

noInline(allocateAndUse);
noInline(allocateModifyAndUse);
noInline(conditionalEscape);
noInline(chainedProcessing);
noInline(nestedAllocation);


for (let i = 0; i < testLoopCount; i++) {
    const size = 3 + (i % 5); 
    const value = i % 10;

    
    let result1 = allocateAndUse(size, value);
    let expected1 = 0;
    for (let j = 0; j < size; j++) {
        expected1 += (value + j) * 2;
    }
    print(result1 === expected1, `allocateAndUse(${size}, ${value}) failed: got ${result1}, expected ${expected1}`);

    
    let result2 = allocateModifyAndUse(size, value);
    let expected2 = 0;
    for (let j = 0; j < size; j++) {
        expected2 += (value + j) * 3 * 2; 
    }
    print(result2 === expected2, `allocateModifyAndUse(${size}, ${value}) failed: got ${result2}, expected ${expected2}`);

    
    let result3 = conditionalEscape(false, size, value);
    let expected3 = expected1; 
    print(result3 === expected3, `conditionalEscape(false, ${size}, ${value}) failed: got ${result3}, expected ${expected3}`);

    
    globalArray = null;
    let result4 = conditionalEscape(true, size, value);
    print(result4 === size, `conditionalEscape(true, ${size}, ${value}) failed: got ${result4}, expected ${size}`);
    print(globalArray !== null && globalArray.length === size, "Array was not properly escaped");

    
    let result5 = chainedProcessing(size, value);
    let expected5 = 0;
    for (let j = 0; j < size; j++) {
        
        
        
        expected5 += (value + j) * 2 + j;
    }
    print(result5 === expected5, `chainedProcessing(${size}, ${value}) failed: got ${result5}, expected ${expected5}`);

    
    if (value > 0) {
        let result6 = nestedAllocation(size, value);
        let expected6 = Math.pow(value, size);
        print(result6 === expected6, `nestedAllocation(${size}, ${value}) failed: got ${result6}, expected ${expected6}`);
    }
}
