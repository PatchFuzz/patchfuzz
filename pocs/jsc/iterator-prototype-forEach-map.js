function test(mapIterator, fn) {
    return Iterator.prototype.forEach.call(mapIterator, fn);
}

function shouldBe(a, b) {
    if (a !== b) {
        throw new Error(`Expected ${b} but got ${a}`);
    }
}


{
    const map = new Map([[1, 10], [2, 20], [3, 30]]);
    let sum = 0;
    test(map.values(), function(value) {
        sum += value;
    });
    shouldBe(sum, 60);
}


{
    const map = new Map([[1, 10], [2, 20], [3, 30]]);
    let sum = 0;
    test(map.keys(), function(key) {
        sum += key;
    });
    shouldBe(sum, 6);
}


{
    const map = new Map([[1, 10], [2, 20]]);
    let keySum = 0;
    let valueSum = 0;
    test(map.entries(), function(entry) {
        keySum += entry[0];
        valueSum += entry[1];
    });
    shouldBe(keySum, 3);
    shouldBe(valueSum, 30);
}


{
    const oldNext = Map.prototype[Symbol.iterator];
    let nextCalled = false;
    Map.prototype[Symbol.iterator] = function() {
        nextCalled = true;
        return oldNext.call(this);
    };
    
    const map = new Map([[1, 10], [2, 20]]);
    let sum = 0;
    test(map.values(), function(value) {
        sum += value;
    });
    shouldBe(sum, 30);
    shouldBe(nextCalled, false); 
    
    Map.prototype[Symbol.iterator] = oldNext;
}
