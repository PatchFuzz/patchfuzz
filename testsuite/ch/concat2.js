




function echo(v) {
    WScript.Echo(v);
}

function guarded_call(func) {
    try {
        func();
    } catch (e) {
        echo(e.name + " : " + e.message);
    }
}

function dump_array(arr) {
    echo("length: " + arr.length);
    for (var p in arr) {
        echo("  " + p + ": " + arr[p]);
    }
}

function test_concat(size) {
    guarded_call(function () {
        var arr = new Array(size);
        arr[size - 1] = 100;

        echo("- concat 101, 102, 103, 104, 105");
        arr = arr.concat(101, 102, 103, 104, 105);
        dump_array(arr);

        echo("- arr.concat(arr)");
        arr = arr.concat(arr);
        dump_array(arr);
    });
}

echo("-------concat Small-------------");
test_concat(500);






echo("-------test prototype lookup-------------");
for (var i = 0; i < 10; i++) {
    Array.prototype[i] = 100 + i;
}
delete Array.prototype[3];

var a = [200, 201, 202, 203, 204];
delete a[1];
a[7] = 207;

echo("a: " + a);

var r = a.concat(300, 301, 302, 303, 304);
echo("r: " + r);

delete r[8];
echo("r: " + r); 

for (var i = 0; i < 10; i++) {
    delete Array.prototype[i];
}
echo("r: " + r); 