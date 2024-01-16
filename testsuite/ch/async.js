




function foo() {
    return this.x; 
}

async function af1(a) {
    await a;
    return await foo.call({ x : 100 }); 
}

async function af2() {
    return await af1(10);
}

var p = af2();
p.then(result => {
        if (result === 100) {
            print("PASS");
        }
    },
    error => {
        print("Failed : " + error);
    } 
);
