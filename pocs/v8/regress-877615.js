Number.prototype.toLocaleString = function() { return 'invalid'; };
print('invalid', [1].toLocaleString());  

Number.prototype.toLocaleString = 'invalid';
print(function() { [1].toLocaleString(); });  

delete Number.prototype.toLocaleString;
Number.prototype.toString = function() { return 'invalid' };
print([1].toLocaleString(), 'invalid');  
print([1].toString(), '1');        
