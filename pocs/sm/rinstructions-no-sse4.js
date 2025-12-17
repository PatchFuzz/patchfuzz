setJitCompilerOption("baseline.warmup.trigger", 10);
setJitCompilerOption("ion.warmup.trigger", 20);


gczeal(0);

const max = 200;





let uceFault = function (i) {
    if (i > 98)
        uceFault = function (i) { return true; };
    return false;
};

let uceFault_ceil_double = eval(
    `(${uceFault})`
        .replace('uceFault', 'uceFault_ceil_double')
);
function rceil_double(i) {
    const x = Math.ceil(i + (-1 >>> 0));
    if (uceFault_ceil_double(i) || uceFault_ceil_double(i))
        print(x, 99 + (-1 >>> 0)); 
    print(x, true);
    return i;
}

let uceFault_floor_double = eval(
    `(${uceFault})`
        .replace('uceFault', 'uceFault_floor_double')
);
function rfloor_double(i) {
    const x = Math.floor(i + (-1 >>> 0));
    if (uceFault_floor_double(i) || uceFault_floor_double(i))
        print(x, 99 + (-1 >>> 0)); 
    print(x, true);
    return i;
}

for (let j = 100 - max; j < 100; j++) {
    with({}){} 
    const i = j < 2 ? (Math.abs(j) % 50) + 2 : j;
    rceil_double(i);
    rfloor_double(i);
}
