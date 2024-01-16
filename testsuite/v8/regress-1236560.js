



let obj = {};
let arr = new Uint8Array(3);
function __f_0() {
        arr[2] = obj;
}
obj.toString = __f_0;
assertThrows(() => obj.toString(), RangeError);
