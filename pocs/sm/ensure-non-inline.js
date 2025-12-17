const constructors = [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float16Array,
    Float32Array,
    Float64Array ];

function messWith(view, obj) {
    view[0] = 1;
    view[1] = 1;
    view[2] = 2;
    view[3] = 3;
    ensureNonInline(obj);
    print(view[0], 1);
    print(view[1], 1);
    print(view[2], 2);
    print(view[3], 3);
}

function test() {
    
    for (const ctor of constructors) {
        let small = new ctor(4);
        messWith(small, small);
        let big = new ctor(4000);
        messWith(big, big);
    }

    
    for (const ctor of constructors) {
        let ab = new ArrayBuffer(96);
        const small = new ctor(ab);
        messWith(small, small);
        ab = new ArrayBuffer(4000);
        const big = new ctor(ab);
        messWith(big, big);
    }

    
    for (const ctor of constructors) {
        let ab = new ArrayBuffer(96);
        const small = new ctor(ab);
        messWith(small, ab);
        ab = new ArrayBuffer(4000);
        const big = new ctor(ab);
        messWith(big, ab);
    }

    
    for (const ctor of constructors) {
        let ab = new ArrayBuffer(96);
        let view0 = new Uint8Array(ab);
        const small = new ctor(ab);
        messWith(small, small);
        ab = new ArrayBuffer(4000);
        view0 = new Uint8Array(ab);
        const big = new ctor(ab);
        messWith(big, big);
    }

    
    for (const ctor of constructors) {
        let ab = new ArrayBuffer(96);
        let view0 = new Uint8Array(ab);
        const small = new ctor(ab);
        messWith(small, ab);
        ab = new ArrayBuffer(4000);
        view0 = new Uint8Array(ab);
        const big = new ctor(ab);
        messWith(big, ab);
    }

    
    for (const ctor of constructors) {
        let ab = new ArrayBuffer(32, {maxByteLength: 64});
        const small = new ctor(ab);
        messWith(small, small);
        ab = new ArrayBuffer(4000, {maxByteLength: 4096});
        const big = new ctor(ab);
        messWith(big, big);
    }
}

try {
    ensureNonInline(new Array(3));
    print(false, true);
} catch (e) {
    print(e.message.includes("unhandled type"), true);
}

test();
