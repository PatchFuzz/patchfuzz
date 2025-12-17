function test1() {
    var a = [];
    for (var i=0; i<130; i++) {
        a[i] = i + 1;
    }
    return a;
}

var arr = test1();
print(arr.length, 130);

for (var i=0; i<130; i++)
    print(arr[i], i + 1);


function getValue(x) {
    var y = x & 0x3;
    if (y == 0) return null;
    if (y == 1) return true;
    if (y == 2) return 1.23;
    if (y == 3) return Math;
    print(0, 1);
}
getValue(0);
getValue(1);

function test2() {
    var a = [];
    for (var i=0; i<130; i++) {
        a[i] = getValue(i);
    }
    return a;
}

var arr = test2();
print(arr.length, 130);

for (var i=0; i<130; i++)
    print(arr[i], getValue(i));



function test3(arr, start, end) {
    for (var i=start; i<end; i++) {
        arr[i] = 10;
    }
}
var a = new Array(200);
test3(a, 10, 130);
print(a.length, 200);

for (var i=10; i<130; i++)
    print(a[i], 10);

test3(a, 130, 220);
print(a.length, 220);


function test4() {
    var a = [0, 1, 2, 3, 4, 5];
    for (var i=0; i<150; i++) {
        a[6] = i;
    }
    return a;
}
var arr = test4();
print(arr[6], 149);
