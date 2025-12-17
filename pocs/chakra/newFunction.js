function write(v) { print(v + ""); }


var f = new Function();
write(f());


var f0 = new Function("return 10;");
write(f0());


var f1 = new Function("a", "return a;");
write(f1());
write(f1(100));


var f2 = new Function("a", "b", "return a+b;");
write(f2());
write(f2(10));
write(f2(10,20));



var f31 = new Function("a", "b", "c", "return a+b+c;");
var f32 = new Function("a,b,c", "return a+b+c;");
var f33 = new Function("a,b", "c", "return a+b+c;");

write(f31());
write(f32());
write(f33());

write(f31(10,20,30));
write(f32(10,20,30));
write(f33(10,20,30));



var x = "global";
function fNameBinding() {
    var x = "local";
    var y = new Function("return x;");
    
    write(y());
    
    return x + " " + y();
}

write(fNameBinding());

