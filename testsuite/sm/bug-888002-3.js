


load(libdir + "asserts.js");

(function (x) {
    "use strict";

    
    
    assertEq(delete (1 ? x : x), true);
    assertEq(delete (0 || x), true);
    assertEq(delete (1 && x), true);

    
    assertThrowsInstanceOf(() => eval('delete x'), SyntaxError);
    assertThrowsInstanceOf(() => Function('"use strict"; delete x'), SyntaxError);
}());
