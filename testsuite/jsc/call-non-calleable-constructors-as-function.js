var errors = "";
var numTests = 0;

function test(type) {
    var didThrow = false;
    try {
        var bad = type(10);
    } catch(e) {
        didThrow = true;
    }

    if (!didThrow) {
        errors += ("bad result: calling " + type.name + " as a function did not throw\n");
    }
    numTests++;

    if (typeof type !== "function")
        errors += ("bad result: typeof " + type.name + " is not function. Was " + (typeof type) + "\n");
    numTests++;
}






test(Int8Array);
test(Uint8Array);
test(Uint8ClampedArray);
test(Int16Array);
test(Uint16Array);
test(Int32Array);
test(Uint32Array);
test(Float32Array);
test(Float64Array);


test(Map);

test(Set);

test(WeakMap);

test(WeakSet);

test(ArrayBuffer);

test(DataView);

test(Promise);

test(Proxy);

let expectedNumTests = 34;
if (numTests != expectedNumTests) {
    errors += "Not all tests were run: ran " + numTests + " out of " + expectedNumTests + " \n";
}
if (errors.length)
    throw new Error(errors);
