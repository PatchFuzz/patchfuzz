var depth = 0;
function __f_3(x) {
  var __v_1 = arguments;
  __v_1[1000] = 123;
  depth++;
  if (depth > 2200) return;
  function __f_4() {
    ++__v_1[0];
    __f_3(0.5);
  };
  __f_4();
}
__f_3(0.5);
