

function bar(a0) {
    '' instanceof a0;
}

function foo() {
    optimizeNextInvocation(foo);
    bar(String);
    bar(Symbol);
}

for (let i=0; i<11; i++)
    foo();
