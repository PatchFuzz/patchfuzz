




var shouldBailout = false;
function test1() {
  var z1 = function () {
  };
  (function () {
    if (shouldBailout) {
      for (var yuijka = 0; yuijka < 6; ++yuijka) {
        ({ a1: 1 });
      }
      d;
    }
  })();
  (function () {
    `,${[z1]}`;
  })();
}
try{
    test1();
    test1();
    shouldBailout = true;
    test1();
}
catch(ex){
    WScript.Echo(ex.message);
}
