function print(condition, message) {
    if (!condition)
        throw new Error(message || "Assertion failed");
}




function createClosureValue(multiplier) {
    return function(x) {
        return x * multiplier;
    };
}


function allocateArrayForClosure(baseValue) {
    const arr = new Array(5);
    for (let i = 0; i < 5; i++) {
        arr[i] = baseValue + i;
    }
    return arr;
}


function processWithClosure(closureFn, arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += closureFn(arr[i]);
    }
    return result;
}


function complexClosureTest(multiplier, baseValue) {
    const closureFn = createClosureValue(multiplier);
    const arr = allocateArrayForClosure(baseValue);
    return processWithClosure(closureFn, arr);
}


function closureModifiesArray(capturedValue) {
    return function(baseValue) {
        const arr = new Array(4);
        for (let i = 0; i < 4; i++) {
            arr[i] = (baseValue + i) + capturedValue;
        }

        
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i] * 2;
        }
        return sum;
    };
}


function nestedClosureWithArray(outerValue) {
    return function(middleValue) {
        return function(baseValue) {
            const arr = new Array(3);
            for (let i = 0; i < 3; i++) {
                arr[i] = baseValue + i + outerValue + middleValue;
            }

            
            let product = 1;
            for (let i = 0; i < arr.length; i++) {
                product *= (arr[i] % 10) || 1; 
            }
            return product;
        };
    };
}

let escapedArray = null;

function conditionalEscapeViaClosure(shouldEscape) {

    return function(baseValue) {
        const arr = new Array(4);
        for (let i = 0; i < 4; i++) {
            arr[i] = baseValue + i * 2;
        }

        if (shouldEscape) {
            escapedArray = arr;
            return arr.length;
        } else {
            
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum;
        }
    };
}


function captureArrayInClosure(baseValue) {
    const arr = new Array(6);
    for (let i = 0; i < 6; i++) {
        arr[i] = baseValue + i;
    }

    
    return function(multiplier) {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result += arr[i] * multiplier;
        }
        return result;
    };
}


function multiArrayClosure(factor1, factor2) {
    return function(baseValue) {
        const arr1 = new Array(3);
        const arr2 = new Array(3);

        for (let i = 0; i < 3; i++) {
            arr1[i] = (baseValue + i) * factor1;
            arr2[i] = (baseValue + i) * factor2;
        }

        
        let combined = 0;
        for (let i = 0; i < 3; i++) {
            combined += arr1[i] + arr2[i];
        }
        return combined;
    };
}

noInline(complexClosureTest);
noInline(closureModifiesArray);
noInline(nestedClosureWithArray);
noInline(conditionalEscapeViaClosure);
noInline(captureArrayInClosure);
noInline(multiArrayClosure);


for (let i = 0; i < testLoopCount; i++) {
    const baseValue = i % 8;
    const multiplier = 1 + (i % 3); 

    
    let result1 = complexClosureTest(multiplier, baseValue);
    let expected1 = 0;
    for (let j = 0; j < 5; j++) {
        expected1 += (baseValue + j) * multiplier;
    }
    print(result1 === expected1, `complexClosureTest(${multiplier}, ${baseValue}) failed: got ${result1}, expected ${expected1}`);

    
    const closureFn = closureModifiesArray(i % 5);
    let result2 = closureFn(baseValue);
    let expected2 = 0;
    for (let j = 0; j < 4; j++) {
        expected2 += (baseValue + j + (i % 5)) * 2;
    }
    print(result2 === expected2, `closureModifiesArray test failed: got ${result2}, expected ${expected2}`);

    
    const nestedFn = nestedClosureWithArray(i % 3)(i % 4);
    let result3 = nestedFn(baseValue);
    let expected3 = 1;
    for (let j = 0; j < 3; j++) {
        let val = (baseValue + j + (i % 3) + (i % 4)) % 10;
        if (val !== 0) expected3 *= val;
    }
    print(result3 === expected3, `nestedClosureWithArray test failed: got ${result3}, expected ${expected3}`);

    
    const condEscapeFn = conditionalEscapeViaClosure(false);
    let result4 = condEscapeFn(baseValue);
    let expected4 = 0;
    for (let j = 0; j < 4; j++) {
        expected4 += baseValue + j * 2;
    }
    print(result4 === expected4, `conditionalEscapeViaClosure(false) test failed: got ${result4}, expected ${expected4}`);

    
    const condEscapeFn2 = conditionalEscapeViaClosure(true);
    let result5 = condEscapeFn2(baseValue);
    print(result5 === 4, `conditionalEscapeViaClosure(true) test failed: got ${result5}, expected 4`);

    
    const capturedFn = captureArrayInClosure(baseValue);
    let result6 = capturedFn(multiplier);
    let expected6 = 0;
    for (let j = 0; j < 6; j++) {
        expected6 += (baseValue + j) * multiplier;
    }
    print(result6 === expected6, `captureArrayInClosure test failed: got ${result6}, expected ${expected6}`);

    
    const multiArrayFn = multiArrayClosure(2, 3);
    let result7 = multiArrayFn(baseValue);
    let expected7 = 0;
    for (let j = 0; j < 3; j++) {
        expected7 += (baseValue + j) * 2 + (baseValue + j) * 3; 
    }
    print(result7 === expected7, `multiArrayClosure test failed: got ${result7}, expected ${expected7}`);
}
