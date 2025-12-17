function __f_3(f) {
  arguments.__defineGetter__('length', f);
  return arguments;
}
function __f_4() { return "boom"; }

__v_4 = [];
__v_13 = "";

for (var i = 0; i < 128; ++i) {
  __v_13 +=  __v_4.__proto__ = __f_3(__f_4);
}
gc();
