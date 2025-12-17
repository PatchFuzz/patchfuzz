var a = 10;
var k = function() { 
    a;
    a++;
}
k();


k.subF1 = function() { 
    a;
    a++;
}
k.subF1();

k.subF1.subsubF1 = function() { 
    a;
    a++;
}

 var m = k.subF1.subsubF1;
 m();

var k2 = k.subF2 = function () {         
    a;
    a++;
}
 
 k2();

var k3 = 1;
k.subF3 = k3 = function () {         
    a;
    a++;
}

k3();

var obj1 = {}
obj1[0] = function () {
    a;
    a++;
}
obj1[0]();
obj1["test"] = function () {
    a;
    a++;
}
obj1["test"]();

function returnObj() { return obj1; }
returnObj()[2] = function () {
    a;
    a++;
}
obj1[2]();

obj1[0][0] = function () {
    a;
    a++;
}
obj1[0][0]();

print("Pass");
