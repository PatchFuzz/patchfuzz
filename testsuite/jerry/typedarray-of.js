

var int_typedarrays = [
    Uint8ClampedArray,
    Uint8Array,
    Uint16Array,
    Uint32Array,
    Int8Array,
    Int16Array,
    Int32Array
];

var float_typedarrays = [
    Float32Array,
    Float64Array,
];

var obj = {
    0: 0,
    1: 1
};

int_typedarrays.forEach(function(e){
    try {
        e.of.call(undefined);
        assert (false);
    } catch (err) {
        assert (err instanceof TypeError);
    }

    try {
        e.of.call(obj);
        assert (false);
    } catch (err) {
        assert (err instanceof TypeError);
    }

    
    assert(e.of(1,2,3).toString() === "1,2,3");
    assert(e.of(12,4,5,0).toString() === "12,4,5,0");
    assert(e.of(23).toString() === "23");

    
    assert(e.of("12",4).toString() === "12,4");
    assert(e.of(1,2,"foo").toString() === "1,2,0");

    
    assert(e.of(undefined).toString() === "0");

    
    assert(e.of(obj).toString() === "0");

    
    assert(e.of(NaN).toString() === "0");
});

float_typedarrays.forEach(function(e){
    try {
        e.of.call(undefined);
        assert (false);
    } catch (err) {
        assert (err instanceof TypeError);
    }

    try {
        e.of.call(obj);
        assert (false);
    } catch (err) {
        assert (err instanceof TypeError);
    }

    
    assert(e.of(1,2,3).toString() === "1,2,3");
    assert(e.of(12,4,5,0).toString() === "12,4,5,0");
    assert(e.of(23).toString() === "23");

    
    assert(e.of("12",4).toString() === "12,4");
    assert(e.of(1,2,"foo").toString() === "1,2,NaN");
    assert(e.of("-12").toString() === "-12");

    
    assert(e.of(undefined).toString() === "NaN");

    
    assert(e.of(obj).toString() === "NaN");

    
    assert(e.of(NaN).toString() === "NaN");
});


var a = Uint8ClampedArray.of(-8);
assert(a.toString() === "0");

a = Uint8Array.of(-8);
assert(a.toString() === "248");

a = Uint16Array.of(-8);
assert(a.toString() === "65528");

a = Uint32Array.of(-8);
assert(a.toString() === "4294967288");

a = Int8Array.of(-8);
assert(a.toString() === "-8");

a = Int16Array.of(-8);
assert(a.toString() === "-8");

a = Int32Array.of(-8);
assert(a.toString() === "-8");

a = Float32Array.of(-8);
assert(a.toString() === "-8");

a = Float64Array.of(-8);
assert(a.toString() === "-8");
