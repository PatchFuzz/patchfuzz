




function f() {
    return "f";
}

function g() {
    return "g";
}





f; 
var o = {
    [f()]: 1,
    [f() + g()]: 2
}

function test() {
    
    f; 
    var o = {
        [f()]: 1,
        [f() + g()]: 2
    }
}

test();

WScript.Echo("passed");
