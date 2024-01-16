





function __f_6() {
this.a4 = {};
}
__v_6 = new __f_6();
__v_6.prototype = __v_6;
__v_6 = new __f_6();
gc();
gc();

buf = new ArrayBuffer(8);
__v_8 = new Int32Array(buf);
__v_9 = new Float64Array(buf);

__v_8[0] = 1;
__v_6.a4 = {a: 0};
delete __v_6.a4;
__v_6.boom = __v_9[0];
