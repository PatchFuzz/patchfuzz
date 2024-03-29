


var map = new Map();
for (var i = 0; i < 20; i++)
    map.set(String.fromCharCode('A'.charCodeAt(0) + i), i);

var log = '';
for (var [k, v] of map) {
    log += k;
    if (v % 5 === 4) {
        
        for (let [k1, v1] of map) {
            if (k1 === k)
                break;
            map.delete(k1);
        }
    }
}
assertEq(log, 'ABCDEFGHIJKLMNOPQRST');
assertEq(map.size, 1);  
assertEq(map.get('T'), 19);
