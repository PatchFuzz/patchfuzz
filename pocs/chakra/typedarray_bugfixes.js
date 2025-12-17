print("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
  {
    name: "OS4927797: TypeofElem fastpath mishandling out-of-range scenario",
    body: function () {
        print("undefined", typeof new Int8Array()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Int8Array");
        print("undefined", typeof new Uint8Array()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Uint8Array");
        print("undefined", typeof new Uint8ClampedArray()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Uint8ClampedArray");
        print("undefined", typeof new Int16Array()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Int16Array");
        print("undefined", typeof new Uint16Array()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Uint16Array");
        print("undefined", typeof new Int32Array()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Int32Array");
        print("undefined", typeof new Uint32Array()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Uint32Array");
        print("undefined", typeof new Float32Array()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Float32Array");
        print("undefined", typeof new Float64Array()[NaN & 0XF], "TypeofElem should return 'undefined' for out-of-range situation in Float64Array");
    }
  },
  {
    name: "OS7115643: TypedArray created through user constructor with insufficient length",
    body: function () {
        var test = function(TypedArrayCtor) {
            class A extends TypedArrayCtor {
                static get [Symbol.species]() { return function() { return new TypedArrayCtor(1); }; };
            }
            
            class B extends TypedArrayCtor {
                static get [Symbol.species]() { return function() { return new Array(1); }; };
            }
            
            var a = new A(1000); 
            print(()=>a.map(()=>0), TypeError, TypedArrayCtor.name+'.prototype.map', 'Invalid offset/length when creating typed array');
            print(()=>a.slice(), TypeError, TypedArrayCtor.name+'.prototype.slice', 'Invalid offset/length when creating typed array');
            print(()=>a.subarray(), TypedArrayCtor.name+'.prototype.subarray', 'Calling subarray should not throw because there\'s no length check');
            print(()=>a.filter(()=>true), TypeError, TypedArrayCtor.name+'.prototype.filter', 'Invalid offset/length when creating typed array');

            var b = new B(1000);
            print(()=>b.map(()=>0), TypeError, TypedArrayCtor.name+'.prototype.map', "'this' is not a typed array object");
            print(()=>b.slice(), TypeError, TypedArrayCtor.name+'.prototype.slice', "'this' is not a typed array object");
            print(()=>b.subarray(), TypeError, TypedArrayCtor.name+'.prototype.subarray', "'this' is not a typed array object");
            print(()=>b.filter(()=>true), TypeError, TypedArrayCtor.name+'.prototype.filter', "'this' is not a typed array object");

            var ctor = function() { return new TypedArrayCtor(1); }
            print(()=>TypedArrayCtor.from.apply(ctor,['123']), TypeError, TypedArrayCtor.name+'.from(iterable)', 'Invalid offset/length when creating typed array');
            print(()=>TypedArrayCtor.from.apply(ctor,[{"0":1,"1":2,"2":3,"length":3}]), TypeError, TypedArrayCtor.name+'.from(non-iterable)', 'Invalid offset/length when creating typed array');
            print(()=>TypedArrayCtor.of.apply(ctor,[1,2,3]), TypeError, TypedArrayCtor.name+'.of', 'Invalid offset/length when creating typed array');
        };

        test(Int8Array);
        test(Uint8Array);
        test(Uint8ClampedArray);
        test(Int16Array);
        test(Uint16Array);
        test(Int32Array);
        test(Uint32Array);
        test(Float32Array);
        test(Float64Array);
    }
  },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
