function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

function main() {
    let emptyValue = null;

    try {
        const set = new Set([1, 2, 3, 4, 5]);

        let cnt = 0;
        set.union({
            size: 10,
            has: key => {
                return true;
            },
            keys: function() {
                let values = [6, 7, 8, 9, 10];
                let index = 0;
                return {
                    next: function() {
                        cnt++;
                        
                        if (cnt === 1) {
                            
                            set.delete(1);
                            set.delete(2);
                            set.delete(3);
                            set.delete(4);
                        } else if (cnt === 2) {
                            emptyValue = set.size; 
                            throw 1; 
                        }
                        
                        if (index < values.length) {
                            return { value: values[index++], done: false };
                        }
                        return { done: true };
                    }
                };
            }
        });
    } catch {
        
    }

    
    
    shouldBe(emptyValue, 1); 
}

main();
