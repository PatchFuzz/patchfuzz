var a = [0, , 2, 3];
var log = [];
for (var x of a) {
    print(x, a[log.length]);
    log.push(x);
}
print(log[1], undefined);
print(log.join(), "0,,2,3");
