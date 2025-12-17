function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}


function testInt32ArraySinkingWithConditionalWrite(shouldInitialize) {
    let arr = new Array(2);

    if (shouldInitialize) {
        arr[0] = 42;
    }

    return arr[0];
}
noInline(testInt32ArraySinkingWithConditionalWrite);


function testDoubleArraySinkingWithConditionalWrite(shouldInitialize) {
    let arr = new Array(2);

    if (shouldInitialize) {
        arr[0] = 42.5;
    }

    return arr[0];
}
noInline(testDoubleArraySinkingWithConditionalWrite);


function testContiguousArraySinkingWithConditionalWrite(shouldInitialize) {
    let arr = new Array(2);

    if (shouldInitialize) {
        arr[0] = {value: 42};
    }

    return arr[0];
}
noInline(testContiguousArraySinkingWithConditionalWrite);

for (let i = 0; i < testLoopCount; ++i) {
    
    shouldBe(testInt32ArraySinkingWithConditionalWrite(true), 42);
    
    shouldBe(testInt32ArraySinkingWithConditionalWrite(false), undefined);

    
    shouldBe(testDoubleArraySinkingWithConditionalWrite(true), 42.5);
    
    shouldBe(testDoubleArraySinkingWithConditionalWrite(false), undefined);

    
    let resultInitialized = testContiguousArraySinkingWithConditionalWrite(true);
    shouldBe(resultInitialized.value, 42);
    
    shouldBe(testContiguousArraySinkingWithConditionalWrite(false), undefined);
}
