





let a;
let f2;
let args;

function setup() {
    a = [0];
    a.unshift(0);
    for (let z of [4, 4, 4, 4, 4]) {};
    new Float64Array(a);
    f2 = function() {};
    args = arguments;
    args.length = 0;
};

function forOfArray() {
    for (let z of [true, true, true, true, true, true, true]) {
    }
}

function forOfArgs() {
    for (let v of args) {
    }
}

function callEveryOnArgs() {
    for (i = 0; i < 1000; ++i) {
        Array.prototype.every.call(args, f2, {});
    }
}

setup();
forOfArray();
forOfArgs();
callEveryOnArgs();
