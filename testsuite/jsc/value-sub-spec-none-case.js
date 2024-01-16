function assert(a, e) {
    if (a !== e)
        throw new Error("Bad");
}

function valueSub() {
    let sum = 0;
    do {
        
        
        for (let i = 0; i < 10000; i++)
            sum++;

        sum += 0.5;
    } while (Date.now() - sum  < 0);

    assert(sum, 10000.5);
}
noInline(valueSub);

valueSub();

