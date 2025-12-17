function f(s) {
    var x = 3, y = 5;
    var z = eval(s);
    print(z, 8);
}
var s = "x + y";
f(s); 
f(s);
f("x + y;"); 
f("x + y;");
