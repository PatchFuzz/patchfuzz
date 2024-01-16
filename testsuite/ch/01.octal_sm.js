




"use strict";

function write(v) { WScript.Echo(v + ""); }


(function Test1() {
    var str = "Octal number";
    try {
        eval("01");
    } catch (e) {
        write("Exception: "  + str);
        return;
    }
    write("Return: "  + str);
})();


(function Test2() {
    var str = "Octal string literal";
    try {
        eval("\'\\02\'");
    } catch (e) {
        write("Exception: "  + str);
        return;
    }
    write("Return: "  + str);
})();


(function Test3() {
    var str = "Octal number following a hex number";
    var a;
    try {
      eval("a = 0x1; a = 01;");
    }
    catch (e) {
      write("Exception: " + str);
      return;
    }
    write("Return: " + str);
})();