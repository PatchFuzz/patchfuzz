var IsPossiblyWrappedTypedArray = getSelfHostedValue("IsPossiblyWrappedTypedArray");

var declareSamples = `
    var allTypedArraySamples = [
        { value: new Int8Array(1), expected: true },
        { value: new Uint8Array(1), expected: true },
        { value: new Int16Array(1), expected: true },
        { value: new Uint16Array(1), expected: true },
        { value: new Int32Array(1), expected: true },
        { value: new Uint32Array(1), expected: true },
        { value: new Float32Array(1), expected: true },
        { value: new Float64Array(1), expected: true },
        { value: new Uint8ClampedArray(1), expected: true }
    ];

    var allObjectSamples = [
        { value: new Array(1), expected: false },
        { value: {}, expected: false },
        { value: { length: 1 }, expected: false }
    ];
`;


var g = newGlobal();
evaluate(declareSamples)
g.evaluate(declareSamples);

var assertCode = `function (value, expected) {
    print(IsPossiblyWrappedTypedArray(value), expected);
    return inIon();
}`;

function checkSamples(samples) {
    
    
    var assert = new Function(`return (${assertCode})`)();

    
    
    
    
    with ({}) {};

    do {
        
        
        
        var spinInJit = true;
        for (var i = 0; i < samples.length; i++) {
            var e = samples[i];
            if (!e) continue;
            spinInJit = spinInJit && print(e.value, e.expected);
        }
    } while(!spinInJit);
}


function test(a, b, c, d) {
    var samples = [
        a == -1 ? null : allTypedArraySamples[a],
        b == -1 ? null : allObjectSamples[b],
        c == -1 ? null : g.allTypedArraySamples[c],
        d == -1 ? null : g.allObjectSamples[d],
    ];

    checkSamples(samples);
}


checkSamples(allTypedArraySamples);
checkSamples(allObjectSamples);
checkSamples(g.allTypedArraySamples);
checkSamples(g.allObjectSamples);


test(-1, -1,  0,  0);
test(-1,  0, -1,  0);
test(-1,  0,  0, -1);
test( 0, -1, -1,  0);
test( 0, -1,  0, -1);
test( 0,  0, -1, -1);
test( 0,  0, -1,  0);


test(-1,  0,  0,  0);
test( 0, -1,  0,  0);
test( 0,  0, -1,  0);
test( 0,  0,  0, -1);


test( 0,  0,  0,  0);
