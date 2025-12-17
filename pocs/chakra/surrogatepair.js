var y = "function () { 'চ𐌲𐌿𐍄𐌹𐍃𐌺নির্বাচিত নিবন্ধ।' ;print('hello'); }"
var x = function () { 'চ𐌲𐌿𐍄𐌹𐍃𐌺নির্বাচিত নিবন্ধ।' ;print('hello'); }


var y2 = "function () { 'üç kuğu' ;print('hello'); }" 
var x2 = function () { 'üç kuğu' ;print('hello'); } 

print((x.toString() === y && x2.toString() === y2) ? "PASS" : "FAIL");