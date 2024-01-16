

function test(letters, toRemove) {
    var set = new Set(letters);
    toRemove = new Set(toRemove);

    var leftovers = [...set].filter(x => !toRemove.has(x)).join("");

    var log = "";
    for (let x of set) {
        log += x;
        if (toRemove.has(x))
            set.delete(x);
    }
    assertEq(log, letters);

    var remaining = [...set].join("");
    assertEq(remaining, leftovers);
}

test('a', 'a');    
test('abc', 'a');  
test('abc', 'b');  
test('abc', 'c');  
test('abc', 'abc') 

