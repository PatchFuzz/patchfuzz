






var y = "function () { 'চ𐌲𐌿𐍄𐌹𐍃𐌺নির্বাচিত নিবন্ধ।' ;WScript.Echo('hello'); }"
var x = function () { 'চ𐌲𐌿𐍄𐌹𐍃𐌺নির্বাচিত নিবন্ধ।' ;WScript.Echo('hello'); }


var y2 = "function () { 'üç kuğu' ;WScript.Echo('hello'); }" 
var x2 = function () { 'üç kuğu' ;WScript.Echo('hello'); } 

WScript.Echo((x.toString() === y && x2.toString() === y2) ? "PASS" : "FAIL");