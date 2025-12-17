var idx = 10000000;


var obj = { };
for (var i = 0; i < 100000; i += 100) { obj[i] = "obj" + i; }


obj[idx] = "obj" + idx;


var str = "" + idx;


for (var i = 0; i < 10; i++) { ({})[str]; }



print(obj[str], obj[idx])
