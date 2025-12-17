var ab = new ArrayBuffer(128);
var uint8c = new Uint8ClampedArray(ab, 3);
var int16 = new Int16Array(ab, 2);
var int32 = new Int32Array(ab, 4);
var float32 = new Float32Array(ab, 0);
var float64 = new Float64Array(ab, 64);
var bigInt64 = new BigInt64Array(ab, 32);

var uint8cProxy = new Proxy(uint8c, {});
var g = newGlobal({newCompartment: true});
var uint8cWrapped = g.evaluate("new Uint8ClampedArray(10)");

var IsTypedArray = getSelfHostedValue("IsTypedArray");
var IsPossiblyWrappedTypedArray = getSelfHostedValue("IsPossiblyWrappedTypedArray");
var TypedArrayLength = getSelfHostedValue("TypedArrayLength");

function testIsTypedArray() {
    function isTA(obj) {
        return IsTypedArray(obj);
    }
    print(isTA(uint8c), true);
    print(isTA(int16), true);
    print(isTA(int32), true);
    print(isTA(float32), true);
    print(isTA(float64), true);
    print(isTA(bigInt64), true);
    print(isTA(Math), false);
    print(isTA(ab), false);
    print(isTA(uint8cProxy), false);
    print(isTA(uint8cWrapped), false);
}

function testIsPossiblyWrappedTypedArray() {
    function isTA(obj) {
        return IsPossiblyWrappedTypedArray(obj);
    }
    print(isTA(uint8c), true);
    print(isTA(int16), true);
    print(isTA(int32), true);
    print(isTA(float32), true);
    print(isTA(float64), true);
    print(isTA(bigInt64), true);
    print(isTA(Math), false);
    print(isTA(ab), false);
    print(isTA(uint8cProxy), false);
    print(isTA(uint8cWrapped), true);
}

function testTypedArrayLength() {
    function getLength(obj) {
        return TypedArrayLength(obj);
    }
    print(getLength(uint8c), 125);
    print(getLength(int16), 63);
    print(getLength(int32), 31);
    print(getLength(float32), 32);
    print(getLength(float64), 8);
    print(getLength(bigInt64), 12);
}

for (var i = 0; i < 40; i++) {
    testIsTypedArray();
    testIsPossiblyWrappedTypedArray();
    testTypedArrayLength();
}
