


function A(a) { this.a = a; }
A.prototype.foo = function (x) { return (x % 3) + this.a; };

function B(b) { this.b = b; }
B.prototype.foo = function (x) { return (x % 3) + this.b + 1; };



function C(c) { this.c = c; }
var GLOBX = {'x': function (x) {
    if (x > 29500)
        throw new Error("ERROR");
    return 2;
}};
function C_foo1(x) {
    return (x % 3) + this.c + GLOBX.x(x) + 1;
}
function C_foo2(x) {
    return (x % 3) + this.c + GLOBX.x(x) + 2;
}
C.prototype.foo = C_foo1;


function makeArray(n) {
    var classes = [A, B, C];
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(new classes[i % 3](i % 3));
    }
    return arr;
}


function runner(arr, resultArray, len) {
    for (var i = 0; i < len; i++) {
        
        
        var obj = arr[i];
        resultArray[0] += obj.foo(i);
    }
}


var resultArray = [0];
var arr = makeArray(30000);


runner(arr, resultArray, 100);


C.prototype.foo = C_foo2;
runner(arr, resultArray, 100);



var gotError = false;
try {
    runner(arr, resultArray, 30000);
} catch(err) {
    gotError = true;
}


assertEq(gotError, true);
assertEq(resultArray[0], 108859);
