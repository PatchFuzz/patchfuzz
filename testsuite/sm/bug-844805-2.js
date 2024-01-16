

function f(x) {
    "use strict";

    
    
    return delete (1 ? x : x);
}
assertEq(f(), true);
