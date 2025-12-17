const v7 = {};

function foo(n) {
    if (n == 0) return;
    const v13 = Object(Object);
    const v14 = v13(v7);
    const v15 = v13.create(v13);
    v15.setPrototypeOf(v14, v13);
    const v18 = v15.assign(v14).create(v14); 
    v18.is(v18, v18);                        
    foo(n-1);
}
foo(2000);
