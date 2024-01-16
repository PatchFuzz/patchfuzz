


























var input = '{ "a1":1, "a2":1, "a3":1, "a4":1, "a5":1, "a6":1, "a7":1,\
               "a8":1, "a9":1, "a10":1, "a11":1, "a12":1, "a13":1}';
var a = JSON.parse(input);
a.a = function() { return 10; };


var b = JSON.parse(input);
b.a = 10;


var c = JSON.parse(input);
c.x = 10;
assertEquals(undefined, c.a);
