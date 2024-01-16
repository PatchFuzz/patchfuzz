


























function StrictCompare(x) { return x === Object(x); }

var obj = new Object();
var obj2 = new Object();
obj == obj;  

StrictCompare(obj);  

assertFalse(StrictCompare('foo'));  
