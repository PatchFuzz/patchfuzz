


load(libdir + "asserts.js");

assertThrowsInstanceOf(() => {
    
    for (const {a=b, b} of [{a:1, b:2}, {b:3}]) {}
}, ReferenceError);
