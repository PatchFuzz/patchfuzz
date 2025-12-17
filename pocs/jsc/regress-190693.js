"use strict";
function truth() {
    return true;
}
noInline(truth);

function print(cond) {
    if (!cond)
        throw new Error("broke assertion");
}
noInline(print);
function shouldThrowInvalidConstAssignment(f) {
    var threw = false;
    try {
        f();
    } catch(e) {
        if (e.name.indexOf("TypeError") !== -1 && e.message.indexOf("readonly") !== -1)
            threw = true;
    }
    print(threw);
}
noInline(shouldThrowInvalidConstAssignment);




const NUM_LOOPS = 6000;

;(function() {
    function taz() {
        const x = 20;
        shouldThrowInvalidConstAssignment(function() { x = 20; });
        print(x === 20);
        shouldThrowInvalidConstAssignment(function() { x += 20; });
        print(x === 20);
        shouldThrowInvalidConstAssignment(function() { x -= 20; });
        print(x === 20);
        shouldThrowInvalidConstAssignment(function() { x *= 20; });
        print(x === 20);
        shouldThrowInvalidConstAssignment(function() { x /= 20; });
        print(x === 20);
        shouldThrowInvalidConstAssignment(function() { x >>= 20; });
        print(x === 20);
        shouldThrowInvalidConstAssignment(function() { x <<= 20; });
        print(x === 20);
        shouldThrowInvalidConstAssignment(function() { x ^= 20; });
        print(x === 20);
        shouldThrowInvalidConstAssignment(function() { x++; });
        print(x === 20);
        shouldThrowInvalidConstAssignment(function() { x--; });
        print(x === 20);
        shouldThrowInvalidConstAssignment(function() { ++x; });
        print(x === 20);
        shouldThrowInvalidConstAssignment(function() { --x; });
        print(x === 20);
    }
    for (var i = 0; i < NUM_LOOPS; i++) {
        taz();
    }
})();

for(var i = 0; i < testLoopCount; ++i);
