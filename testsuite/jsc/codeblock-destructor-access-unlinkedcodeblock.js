





function foo() {
    let a=0;
    while(1) a++;
}

for (let i=0; i<10; i++) {
    runString(`${foo.toString()};foo();foo();`);
}
gc();
