

function f() {
    var g = x => { return !x; };
    return "f:" + g(true);
}

assertEq(f(), "f:false");
