




function write(v) { WScript.Echo(v + ""); }

var f=function() {}
write("Initial  : " + f.hasOwnProperty('prototype'));
delete f.prototype
write("Deletion : " + f.hasOwnProperty('prototype'));