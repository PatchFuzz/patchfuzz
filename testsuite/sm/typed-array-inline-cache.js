
function check_in(x, a) {
    return (x in a);
}

function check_has_own(x, a) {
    return a.hasOwnProperty(x);
}


function warmup(a) {
    for (var i = 0; i < 1001; i++) {
        check_in(i, a);
        check_has_own(i, a);
    }
}

function check_assertions(a) {
    assertEq(check_in(1, a),      true);
    assertEq(check_in("-0",a),    false); 
    assertEq(check_in(-10,a),     false); 
    assertEq(check_in(1012,a),    false); 


    assertEq(check_has_own(1, a),      true);
    assertEq(check_has_own("-0",a),    false); 
    assertEq(check_has_own(-10,a),     false); 
    assertEq(check_has_own(1012,a),    false); 
}

function test_with_no_protochain(a) {
    var a = new Int32Array(1000).fill(1);
    warmup(a);
    check_assertions(a);
}






function test_with_protochain(a) {
    var a = new Int32Array(1000).fill(1);
    warmup(a);
    
    Object.prototype["-0"] = "value";
    Object.prototype[-1]   = "value";
    Object.prototype[-10]  = "value";
    Object.prototype[1012] = "value";
    check_assertions(a);
}

test_with_no_protochain();
test_with_protochain();
