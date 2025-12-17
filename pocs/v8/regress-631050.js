function __f_3(x, expected) {
  var __v_3 = [];
  __v_3.length = x;
  __f_3(true, 1);
}

try {
  __f_3(2147483648, 2147483648);
} catch (e) {}
