Array.prototype[1] = 'peek';
var log = [];
for (var x of [0, , 2, 3])
    log.push(x);
print(log[1], 'peek');
print(log.join(), "0,peek,2,3");
