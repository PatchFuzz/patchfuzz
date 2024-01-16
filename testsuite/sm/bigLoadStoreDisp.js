














var x = {}
for (var i = 0; i < 20000; i++)
    x[i] = 0;
x.y = 99;            

for (var i = 0; i < 1000; ++i) {
    x.y++;           
}
assertEq(x.y, 1099); 

