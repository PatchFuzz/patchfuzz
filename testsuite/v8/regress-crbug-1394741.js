





(function __f_0() {
  let worker = new Worker('', {type: 'string'});
})();
function __f_11() { return "A"; }
function __f_12() { return "\u1234"; }
function __f_13() {
  var __v_3 = "";
  var __v_5 =
      "AAAA" + __f_11();
  var __v_6 =
      "\u1234\u1234\u1234\u1234" + __f_12();
      gc();
  externalizeString(__v_6);
}
for (var __v_4 = 0; __v_4 < 10; __v_4++) {
  __f_13();
}
