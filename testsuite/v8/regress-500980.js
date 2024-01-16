



var a = "a";
assertThrows(function() { while (true) a += a; }, RangeError);
assertThrows(function() { a in a; }, TypeError);
