function print(b) {
    if (!b)
        throw new Error("Bad!")
}
noInline(print);

let calledGet = false;
let definedAccessor = false;
function test() {
    function foo(...rest) {
        return rest;
    }
    noInline(foo);

    for (let i = 0; i < testLoopCount; i++) {
        const size = 800;
        let arr = new Array(size);
        for (let i = 0; i < size; i++)
            arr[i] = i;
        let result = foo(...arr);

        print(result.length === arr.length);
        print(result.length === size);
        for (let i = 0; i < arr.length; i++) {
            print(arr[i] === result[i]);
            print(result[i] === i);
        }
        if (definedAccessor) {
            calledGet = false;
            result[0];
            print(!calledGet);
            arr[0];
            print(calledGet);

            let testArr = [...arr];
            calledGet = false;
            testArr[0];
            print(!calledGet);
        }
    }
}
test();

definedAccessor = true;
Reflect.defineProperty(Array.prototype, "0", {
    get() { calledGet = true; return 0; },
    set(x) {  }
});
test();
