function g1(x, args) {
    args[0] = 88;
}








function f1(x, y, o) {
    var res = 0;
    for (var i=0; i<50; i++) {
	res += x + y;
	if (i > 10)
	    o.apply(null, arguments);
    }
    return res;
}

var o1 = {apply: g1};
assertEq(f1(3, 5, o1), 3630);
assertEq(f1(3, 5, o1), 3630);


function g2(x, args) {
    args[0] = 88;
}

function f2(x, y, o) {
    "use strict";
    var res = 0;
    for (var i=0; i<50; i++) {
	res += x + y;
	if (i > 10)
	    o.apply(null, arguments);
    }
    return res;
}

var o2 = {apply: g2};
assertEq(f2(3, 5, o2), 400);
assertEq(f2(3, 5, o2), 400);
