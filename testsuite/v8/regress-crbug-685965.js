



function __f_0(a) {
  var __v_3 = a + undefined;
  var __v_0 = __v_3.substring(0, 20);
  var __v_1 = {};
  __v_1[__v_3];
  return __v_0;
}
__v_4 = __f_0( "abcdefghijklmnopqrstuvwxyz");
assertEquals("bcdefg", __v_4.substring(7, 1));
