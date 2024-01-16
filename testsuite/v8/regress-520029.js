







function f(one) { class x { } { class x { } function g() { one; x; } g() } } f()


function g() { var x = 1; { let x = 2; function g() { x; } g(); } }
assertEquals(undefined, g());


function __f_4(one) {
  var __v_10 = one + 1;
  {
    let __v_10 = one + 3;
    function __f_6() {
 one;
 __v_10;
    }
    __f_6();
  }
}
__f_4();
