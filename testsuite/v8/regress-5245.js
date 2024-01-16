



"use strict";



var a = {};
Error.captureStackTrace(a, Error);
a.stack = 1;  



var b = new Error();
b.stack = 1;  
b.stack = 1;  



var c = new Error();
var old_stack = c.stack;
c.stack = 1;  
c.stack = 1;  
