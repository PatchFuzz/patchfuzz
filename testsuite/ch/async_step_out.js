




function foo() {
    return 100;
}

async function af1(a) {
    return await foo();
}

async function af2() {
    return await af1(10);
}

var p = 1;


p = af2();

p.then(result => {
        if (result === 100) {
            print("PASS");
        }
    },
    error => {
        print("Failed : " + error);
    } 
);