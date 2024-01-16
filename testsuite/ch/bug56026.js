







try {
    (function () {
        with ({}) with ({}) with ({}) {
            for (eval("a = 0");
              a < 1;
              function x() {
                  with ({}) with ({}) with ({}) (function y() { new Function })();
                  with ({}) x();
              } ()
            ) {
            }
        }
    })();
}
catch (ex) {
    if (ex.message == "Out of stack space") {
        WScript.Echo("PASSED");
    }
}
