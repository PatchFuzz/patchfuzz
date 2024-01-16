






let t = 0;
gczeal(2,1);
eval("\
let x0 = 3, y = 4;\
{ let x = x0+0, y = 12; t += (x + y); }  \
{ let x = x0+1, y = 12; t += (x + y); }  \
{ let x = x0+2, y = 12; t += (x + y); }  \
{ let x = x0+3, y = 12; t += (x + y); }  \
{ let x = x0+4, y = 12; t += (x + y); }  \
{ let x = x0+5, y = 12; t += (x + y); }  \
{ let x = x0+6, y = 12; t += (x + y); }  \
{ let x = x0+7, y = 12; t += (x + y); }  \
{ let x = x0+8, y = 12; t += (x + y); }  \
{ let x = x0+9, y = 12; t += (x + y); }  \
t += (x0 + y);\
assertEq(t, 202);\
");
