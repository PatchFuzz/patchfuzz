function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual + ', expected: ' + expected);
}

function main() {
    let capturedKey = null;

    try {
        const set = new Set([1, 2, 3, 4, 5]);

        let iterationCount = 0;
        const result = set.union({
            size: 3,
            has: key => true,
            keys: function() {
                return {
                    next: function() {
                        iterationCount++;
                        
                        if (iterationCount === 1) {
                            
                            
                            set.delete(1);
                            set.delete(2);
                            set.delete(3);
                            set.delete(4);
                            return { value: 6, done: false };
                        } else if (iterationCount === 2) {
                            
                            capturedKey = [...set][0]; 
                            return { value: 7, done: false };
                        } else if (iterationCount === 3) {
                            return { value: 8, done: false };
                        } else {
                            return { done: true };
                        }
                    }
                };
            }
        });

        
        
        shouldBe(result.has(1), true); 
        shouldBe(result.has(2), true); 
        shouldBe(result.has(3), true); 
        shouldBe(result.has(4), true); 
        shouldBe(result.has(5), true); 
        shouldBe(result.has(6), true); 
        shouldBe(result.has(7), true); 
        shouldBe(result.has(8), true); 
        shouldBe(result.size, 8);

        
        shouldBe(capturedKey, 5);
        shouldBe(set.size, 1);
        shouldBe(set.has(5), true);

    } catch (e) {
        throw new Error('Unexpected error: ' + e);
    }
}

main();
