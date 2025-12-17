function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

async function fn() {
    
    const valueOfModule = await import('./resources/value-of-module.js');
    const toStringModule = await import('./resources/to-string-module.js');

    
    shouldBe(String(toStringModule), `2020`);
    shouldBe(Number(toStringModule), 2020); 

    shouldBe(Number(valueOfModule), 42); 
    shouldBe(String(valueOfModule), `42`);
}
fn().catch(print);
