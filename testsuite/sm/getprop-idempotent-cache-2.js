function f(o) {
    var res = 0;
    for (var i=0; i<110; i++) {
        res += o.x;
    }
    return res;
}

function O(x) {
    if ([].length == 0) 
        this.x = 10;
}

var o = new O(true);
f(o);


var res = 0;
o.__defineGetter__("x", function() { res++; });
f(o);
assertEq(res, 110);
