



var a = [];
var endIndex = 0xffff;
a[endIndex] = 3;
Object.defineProperty(a, 0, { get: function() { this[1] = 2; return 1; } });
assertEquals('123', a.join(''));
delete a[1];  
assertEquals('1,2,', a.join().slice(0, 4));
