





function test0(a) {
    a &= 1;
    var b = 1 << a;
    var c = 0;
    if(a)
        c = (b = +b) * 1.1;
    return ~b;
}
WScript.Echo("test0: " + test0(1));







function test1() {
    var o = {};
    var a = ~o;
    if(a === 1.1)
        a = 1;
    return a + 1;
}
WScript.Echo("test1: " + test1());

var shouldBailout = false;
function testrem(){
  function leaf(x) { return x; };
  var obj0 = {};
  var func0 = function(p0,p1,p2){
    return (g += k);
  }
  var func1 = function(p0){
    
    k -=((((r ^ (++ q)) % (~ 1)) * (1 - ((shouldBailout ? func0 = leaf : 1), func0(1, 1)))) ? 1 : d);
  }
  var func2 = function(p0,p1,p2){
    func0(1, 1, 1, 1, (-- d), 1);
  }
  obj0.method0 = func2;
  var b = 2147483647;
  var d = -984599814;
  var g = 1;
  var k = 1;
  var q = 7.26957791630936E+18;
  var r = -264469094;
  obj0.prop0 = 1;
  obj0.length = {prop7: 1, prop6: 1, prop5: 1, prop4: 1, prop3: 1, prop2: 1, prop1: (q += b), prop0: (func1() * obj0.method0(1, 1, 1, 1))};
  ((obj0.prop0 -= g));
  WScript.Echo("obj0.prop0 = " + (obj0.prop0|0));
};

testrem();
testrem();




function test2() {
  var func1 = function (argMath2) {
	  for (; __loopvar0 != 2 && d < argMath2; ) {
      __loopvar0 += 3;
    }
  };
  var i32 = new Int32Array();
  var d = -1865727919761880000;
  var uniqobj0 = Object();
  var __loopvar0 = -1;

  var count = 1;
  
  for (; count ? true : func1(uniqobj0); i32[1317940107]) {
    count--;
  }
  uniqobj0;
}
test2();
test2();