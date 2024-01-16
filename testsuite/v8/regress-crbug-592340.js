



class MyArray extends Array { }
Object.prototype[Symbol.species] = MyArray;
delete Array[Symbol.species];
__v_1 = Math.pow(2, 31);
__v_2 = [];
__v_2[__v_1] = 31;
__v_4 = [];
__v_4[__v_1 - 2] = 33;
assertThrows(() => __v_2.concat(__v_4), RangeError);
