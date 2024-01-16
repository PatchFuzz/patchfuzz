


(function body() {
    function foo(a) {
        return a.length + a.byteLength + a.byteOffset;
    }

    let array = new Int32Array(10);

    for (let i = 0; i < 100000; i++)
        foo(array);


    Object.defineProperty(array, "length", { value: 0 });
    Object.defineProperty(array, "byteLength", { value: 0 });
    Object.defineProperty(array, "byteOffset", { value: 0 });

    if (foo(array) !== 0)
        throw "wrong number!";
})();
