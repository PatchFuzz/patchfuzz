Object.prototype[5]  = "obj.proto5";
Object.prototype[7]  = "obj.proto7";

Array.prototype[1]   = "arr.proto.1";
Array.prototype[2]   = "arr.proto.2";
Array.prototype[3]   = "arr.proto.3";
Array.prototype[6]   = "arr.proto.6";

var n=8;

var arr = new Array(4);
arr[1] = null;
arr[2] = undefined;

function test() {
        var x;
        switch (x) {
        default:
                [1, , ];
        }
};

function ArrayLiteralMissingValue()
{
  return [1, 1, -2147483646];
}
var arr1 = ArrayLiteralMissingValue();

function ArrayConstructorMissingValue()
{
  return new Array(-1, -2147483646);
}
var IntArr0 = ArrayConstructorMissingValue();

print(testFunction, 50);



function testFunction()
{
    for (var i=0;i<n;i++) {
        print(`arr[${i}] : ${arr[i]}`, true);
    }

    test();
    test();

    print(`[] missing value:${arr1[2]}`, true);
    print(`Array() missing value:${IntArr0[1]}`, true);

    emitTTDLog(ttdLogURI);
}