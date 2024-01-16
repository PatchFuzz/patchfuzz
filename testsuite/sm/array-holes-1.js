

var a = [0, , 2, 3];
var log = [];
for (var x of a) {
    assertEq(x, a[log.length]);
    log.push(x);
}
assertEq(log[1], undefined);
assertEq(log.join(), "0,,2,3");
