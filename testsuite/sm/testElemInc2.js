var obj = {s: ""};
var name = "s";
for (var i = 0; i <= 13; i++)
    if (i > 8)
        obj[name]++;  
assertEq(obj.s, 5);

