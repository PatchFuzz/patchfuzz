











function TestObjectForFoo1() {
}

function makeObjectForFoo1a() {
    return new TestObjectForFoo1();
}

function foo1(o, JIT) {
    o.x = 100; 
    if (!JIT) {
        o.y = 200; 
    }
    o.z = 300; 
    var sum = 0;
    for (var s in o) {
        WScript.Echo(s + ": " + o[s]);
        sum += o[s];
    }
    return sum;
}
WScript.Echo(foo1(makeObjectForFoo1a(), false));
WScript.Echo(foo1(makeObjectForFoo1a(), true));

function makeObjectForFoo1b() {
    var o = new TestObjectForFoo1();
    o.x = 0;
    o.y = 0;
    o.z = 0;
    return new TestObjectForFoo1();
}

function foo1(o, JIT) {
    o.x = 100; 
    if (!JIT) {
        o.y = 200; 
    }
    o.z = 300; 
    var sum = 0;
    for (var s in o) {
        WScript.Echo(s + ": " + o[s]);
        sum += o[s];
    }
    return sum;
}
WScript.Echo(foo1(makeObjectForFoo1b(), false));
WScript.Echo(foo1(makeObjectForFoo1b(), true));


function TestObjectForFoo2() {
}

function makeObjectForFoo2a() {
    return new TestObjectForFoo2();
}

function foo2a(o, JIT) {
    o.x = 100; 
    if (!JIT) {
        o.y = 200; 
    }
    o.z = 300; 
    o.y = 500;
    var sum = 0;
    for (var s in o) {
        WScript.Echo(s + ": " + o[s]);
        sum += o[s];
    }
    return sum;
}
WScript.Echo(foo2a(makeObjectForFoo2a(), false));
WScript.Echo(foo2a(makeObjectForFoo2a(), true));


function makeObjectForFoo2b() {
    var o = new TestObjectForFoo2();
    o.x = 0;
    o.y = 0;
    o.z = 0;
    return new TestObjectForFoo2();
}

function foo2b(o, JIT) {
    o.x = 100; 
    if (!JIT) {
        o.y = 200; 
    }
    o.z = 300; 
    o.y = 500;
    var sum = 0;
    for (var s in o) {
        WScript.Echo(s + ": " + o[s]);
        sum += o[s];
    }
    return sum;
}
WScript.Echo(foo2b(makeObjectForFoo2b(), false));
WScript.Echo(foo2b(makeObjectForFoo2b(), true));


function TestObjectForFoo3() {
}

function makeObjectForFoo3a() {
    return new TestObjectForFoo3();
}

function foo3(o, Int)
{
    o.p1 = 1;
    o.p2 = (!Int ? (o.p5 = 100):100);
    if (Int)
    {
        o.p3 = 2;
    }
    o.p4 = 3;
    for (var i in o)
    {
        WScript.Echo(i + ":" + o[i]);
    }
    WScript.Echo("END");
    WScript.Echo("");
}
foo3(makeObjectForFoo3a(), true);
foo3(makeObjectForFoo3a(), false)

function makeObjectForFoo3b() {
    var o = new TestObjectForFoo3();
    o.p1 = 0;
    o.p2 = 0;
    o.p3 = 0;
    o.p4 = 0;
    return new TestObjectForFoo3();
}

function foo3(o, Int)
{
    o.p1 = 1;
    o.p2 = (!Int ? (o.p5 = 100):100);
    if (Int)
    {
        o.p3 = 2;
    }
    o.p4 = 3;
    for (var i in o)
    {
        WScript.Echo(i + ":" + o[i]);
    }
    WScript.Echo("END");
    WScript.Echo("");
}
foo3(makeObjectForFoo3a(), true);
foo3(makeObjectForFoo3a(), false)

function test5() {
  var window = function () {
  };
  z = {
    z: Math.pow(),
    set b(u3056) {
    },
    b: 4277,
    z: window
  };
}
test5();
test5();
test5();
test5();
test5();
function printAll(n, v) {
  for (var c in v) {
    if (typeof v != "string")
      printAll(c, v[c]);
  }
}
printAll('this', this);
