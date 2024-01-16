

var typedarrays = [
    new Uint8ClampedArray([0, 1, 2, 3, 4, 5]),
    new Uint8Array([0, 1, 2, 3, 4, 5]),
    new Uint16Array([0, 1, 2, 3, 4, 5]),
    new Uint32Array([0, 1, 2, 3, 4, 5]),
    new Float32Array([0, 1, 2, 3, 4, 5]),
    new Float64Array([0, 1, 2, 3, 4, 5]),
    new Int8Array([0, 1, 2, 3, 4, 5]),
    new Int16Array([0, 1, 2, 3, 4, 5]),
    new Int32Array([0, 1, 2, 3, 4, 5])
  ];

typedarrays.forEach(function(e){
    try {
        e.prototype.slice.call (undefined);
        assert (false);
    } catch (err) {
        assert (err instanceof TypeError);
    }

    
    assert(e.slice(1, 3).toString() === "1,2");
    assert(e.slice(2, 5).toString() === "2,3,4");
    assert(e.slice(0, 6).toString() === "0,1,2,3,4,5");

    
    assert(e.slice(-2, 5).toString() === "4");
    assert(e.slice(0, -3).toString() === "0,1,2");
    assert(e.slice(-1, -4).toString() === "");

    
    assert(e.slice(7, 1).toString() === "");
    assert(e.slice(2, 9).toString() === "2,3,4,5");

    
    assert(e.slice(undefined, 4).toString() === "0,1,2,3");
    assert(e.slice(0, undefined).toString() === "0,1,2,3,4,5");
    assert(e.slice(undefined, undefined).toString() === "0,1,2,3,4,5");

    
    assert(e.slice(NaN, 3).toString() === "0,1,2");
    assert(e.slice(2, Infinity).toString() === "2,3,4,5");
    assert(e.slice(-Infinity, Infinity).toString() === "0,1,2,3,4,5");

    
    assert(e.slice().toString() === "0,1,2,3,4,5");
    assert(e.slice(4).toString() === "4,5");
});
