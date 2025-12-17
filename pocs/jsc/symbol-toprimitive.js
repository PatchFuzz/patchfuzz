let foo = { }
foo[Symbol.toPrimitive] = function() { return {} };

for (i = 0; i < testLoopCount; i++) {
    let failed = true;
    try {
        foo >= 1;
    } catch (e) {
        if (e instanceof TypeError)
            failed = false;
    }

    if (failed)
        throw "should have thrown on return of object";
}


