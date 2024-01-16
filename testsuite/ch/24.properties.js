




var scenario = "add property after it was deleted for non-extensible object";
var a = {x:0, get y() { return 0;}}; 
delete a.x;
Object.preventExtensions(a);
try {
  a.x = 1;
  WScript.Echo("Return:", scenario);
} catch (ex) {
  WScript.Echo("Exception:", scenario);
}
