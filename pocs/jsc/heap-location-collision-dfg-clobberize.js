const arr = [0];

function foo() {
    for (let _ in arr) {
        0 in arr;
        while(1);
    }
}


foo();
