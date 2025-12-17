print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "#6179 - Assert in JavascriptArray::EntryReverse when length > Uint32Max for TypedArray with Array prototype",
        body: function () {
            var ua = new Uint32Array(0x10);
            ua.__proto__ = new Array(0xffffffff);
            ua.length = 0xffffffff*2;

            print(()=>ua.reverse(), TypeError, "Array#reverse tries to delete a property on the TypedArray but that throws");
        }
    },
    {
        name: "#6179 - Assert in JavascriptArray::EntryReverse when length > Uint32Max for TypedArray with own length property",
        body: function () {
            var ua = new Uint32Array(0x10);
            Object.defineProperty(ua, 'length', {value: 0xffffffff*2 });

            print(()=>Array.prototype.reverse.call(ua), TypeError, "Array#reverse tries to delete a property on the TypedArray but that throws");
        }
    },
    {
        name: "#6179 - Assert in JavascriptArray::EntryReverse when length > Uint32Max for an object with length property",
        body: function () {
            let getCount = 0;
            let setCount = 0;
            var ua = {
                length: 0xffffffff*2,
                set [0xffffffff*2-1](v) {
                    print(1, getCount, "1 === getCount");
                    print(0, setCount, "0 === setCount");
                    setCount++
                },
                get '0'() {
                    print(0, getCount, "0 === getCount");
                    print(0, setCount, "0 === setCount");
                    getCount++
                },
                get '1'() {
                    print(1, getCount, "1 === getCount");
                    print(1, setCount, "1 === setCount");
                    throw 123; 
                }
            };

            print(()=>Array.prototype.reverse.call(ua), 123, "Array#reverse will throw above when we try and get property '1'");

            print(1, getCount, "1 === getCount");
            print(1, setCount, "1 === setCount");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
