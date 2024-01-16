



function f(a, b, c) { }
function a() {
    let o1;
    o1 = new Array();
    f(...o1);
    o1[1000] = Infinity;
}

a();
a();
