function test1() {
  var a = {};
  var r;
  a.NaN = "orig";
  for (var i = 0; i < 1; ++i) {
    r = a.NaN;
    i = Math.pow(1, Infinity);  
    a[i] = "new";   
    r = a.NaN;      
  }
  return r;
}


function test2() {
  var a = {};
  var r;
  a.Infinity = "orig";
  for (var i = 0; i < 1; ++i) {
    r = a.Infinity;
    i = 1 / 0;      
    a[i] = "new";   
    r = a.Infinity; 
  }
  return r;
}


function test3() {
  var a = {};
  a[-Infinity] = "orig";
  var r;
  for (var i = 0; i > -1; --i) {
    r = a["-Infinity"];
    i = -1 / 0;
    a[i] = "new";
    r = a["-Infinity"];
  }
  return r;
}


function test4() {
  var a = {};
  var r;
  a[1.23] = "orig";
  for (var i = 1; i < 2; ++i) {
    r = a[1.23];
    i = 1 + 0.23;
    a[i] = "new";   
    r = a["1.23"];  
  }
  return r;
}


function test5() {
  var a = {};
  var r;
  a.NaN = "orig";
  for (var i = 0; i < 1; ++i) {
    r = a.NaN;
    i = Math.pow(1, Infinity); 
    a[i] = "new";   
    r = a[NaN];     
  }
  return r;
}


function test6() {
  var a = {};
  var r;
  a[1.23] = "orig";
  for (var i = 1; i < 2; ++i) {
    r = a[1.23];
    i = 1 + 0.23;
    a[i] = "new";   
    r = a[1.23];    
  }
  return r;
}

var isPass = true;
function reportError(arg1, arg2) {
  print(arg1, arg2);
  isPass = false;
}

var expected = "new";
var r1 = test1();
var r2 = test2();
var r3 = test3();
var r4 = test4();
var r5 = test5();
var r6 = test6();

if (r1 != expected) reportError("bug: r1 =", r1);
if (r2 != expected) reportError("bug: r2 =", r2);
if (r3 != expected) reportError("bug: r3 =", r3);
if (r4 != expected) reportError("bug: r4 =", r4);
if (r5 != expected) reportError("bug: r5 =", r5);
if (r6 != expected) reportError("bug: r6 =", r6);

if (isPass) print("PASS");
