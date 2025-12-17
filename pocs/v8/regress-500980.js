var a = "a";
print(function() { while (true) a += a; }, RangeError);
print(function() { a in a; }, TypeError);
