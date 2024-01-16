

class MyInt32Array extends Int32Array {};
var t1= new MyInt32Array([1,2]);

assert(Object.getPrototypeOf(t1) == MyInt32Array.prototype)


class MyArrayBuffer extends ArrayBuffer {};
var t2= new MyArrayBuffer(8);

assert(Object.getPrototypeOf(t2) == MyArrayBuffer.prototype)
