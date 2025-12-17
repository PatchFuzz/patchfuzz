var a = [0, , , 3];
a.slow = true;
Object.prototype[1] = 'peek1';
Array.prototype[2] = 'peek2';

var log = [];
for (var x of a)
    log.push(x);
print(log[1], 'peek1');
print(log[2], 'peek2');
print(log.join(), "0,peek1,peek2,3");
