'use strict';
const TypedArrays = [Uint8ClampedArray, Uint8Array, Uint16Array, Uint32Array, Int8Array, Int16Array, Int32Array, Float32Array, Float64Array];
const canonicalNumericIndexStrings = ['-0', '-1', '-3.14', 'Infinity', '-Infinity', 'NaN', '0.5', '4294967295', '4294967296'];

function print(x, key) {
    if (!x)
        throw new Error(`Bad assertion! Key: '${key}'`);
}

for (const TypedArray of TypedArrays) {
    for (const key of canonicalNumericIndexStrings) {
        const assertPrototypePropertyIsUnreachable = () => {
            {
                const tA = new TypedArray;
                tA[key] = 1;
                print(!tA.hasOwnProperty(key), key);
            }

            {
                const tA = new TypedArray;
                const heir = Object.create(tA);
                heir[key] = 2;

                print(!tA.hasOwnProperty(key), key);
                print(!heir.hasOwnProperty(key), key);
            }

            {
                const target = {};
                const receiver = new TypedArray;

                print(!Reflect.set(target, key, 3, receiver), key);
                print(!target.hasOwnProperty(key), key);
                print(!receiver.hasOwnProperty(key), key);
            }

            {
                const tA = new TypedArray;
                const target = Object.create(tA);
                const receiver = {};

                print(Reflect.set(target, key, 4, receiver), key);
                print(!tA.hasOwnProperty(key), key);
                print(!target.hasOwnProperty(key), key);
                print(!receiver.hasOwnProperty(key), key);
            }
        };

        Object.defineProperty(TypedArray.prototype, key, {
            set() { throw new Error(`${TypedArray.name}.prototype['${key}'] setter should be unreachable!`); },
            configurable: true,
        });
        print();

        Object.defineProperty(TypedArray.prototype, key, { writable: false });
        print();
    }
}
