var g = newGlobal("same-compartment");
try {
    evalcx("'use strict'; (function() { x = 33; })()", g);
    print(0, 1);
} catch(e) {
    print(e.toString().includes("variable x"), true);
}
