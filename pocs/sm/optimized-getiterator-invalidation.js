const ITERS = 1000;



function f(x) {
    let sum = 0;
    for (let i = 0; i < ITERS; i++) {
        const [a, b, c] = x
        sum = a + b + c;
    }
    return sum
}



let arr = [1, 2, 3, 4];
for (let i = 0; i < 1000; i++) {
    f(arr);
}


let counter = 0;
const ArrayIteratorPrototype = Object.getPrototypeOf([][Symbol.iterator]());


ArrayIteratorPrototype.return = function () {
    counter++;
    return { done: true };
};



f(arr);


print(counter, ITERS);
