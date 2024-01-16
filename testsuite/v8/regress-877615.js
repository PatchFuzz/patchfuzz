


























Number.prototype.toLocaleString = function() { return 'invalid'; };
assertEquals('invalid', [1].toLocaleString());  

Number.prototype.toLocaleString = 'invalid';
assertThrows(function() { [1].toLocaleString(); });  

delete Number.prototype.toLocaleString;
Number.prototype.toString = function() { return 'invalid' };
assertEquals([1].toLocaleString(), 'invalid');  
assertEquals([1].toString(), '1');        
