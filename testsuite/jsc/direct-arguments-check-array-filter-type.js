

function foo(a0, a1) {
    Function.__defineSetter__(0, ()=>{});
    Object.freeze(arguments);
    for (let i = 0; i < 3; i++) {}
    arguments[0];
    const x = 0;
    const y = 0;
}

foo();
