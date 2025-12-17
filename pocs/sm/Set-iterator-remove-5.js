var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var set = new Set(str);

var log = '';
var i = 0;
for (var x of set) {
    log += x;
    if (i++ % 5 === 0) {
        
        for (let y of set) {
            if (y === x)
                break;
            set.delete(y);
        }
    }
}
print(log, str);
print(set.size, 1);  
print(set.has('Z'), true);
