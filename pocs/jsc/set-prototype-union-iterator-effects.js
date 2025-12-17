function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error(`bad value: ${actual}, expected: ${expected}`);
}


function main() {
    let set1 = new Set([1, 2, 3, 4, 5]);
    let iterationCount = 0;
    
    let otherObject = {
        size: 3,
        has: function(key) {
            return true;
        },
        keys: function() {
            return {
                next: function() {
                    iterationCount++;
                    if (iterationCount === 1) {
                        
                        set1.delete(1);
                        set1.delete(2);
                        return { value: 6, done: false };
                    } else if (iterationCount === 2) {
                        return { value: 7, done: false };
                    } else if (iterationCount === 3) {
                        return { value: 8, done: false };
                    } else {
                        return { done: true };
                    }
                }
            };
        }
    };
    
    let result = set1.union(otherObject);
    
    
    shouldBe(result.has(3), true);
    shouldBe(result.has(4), true);
    shouldBe(result.has(5), true);
    shouldBe(result.has(6), true);
    shouldBe(result.has(7), true);
    shouldBe(result.has(8), true);
    
    
    
    shouldBe(result.has(1), true);
    shouldBe(result.has(2), true);
}

main();
