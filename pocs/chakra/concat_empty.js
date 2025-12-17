print("Concatenation of empty strings.");

var x = "";
var y = "";

x += y;
x = x + y;
x += "";
y += "";
x = x = "";

for(var i = 0; i < 10000; ++i)
{
    x += x + y + x + y + x + "";
}

print("{" + x + "}");
