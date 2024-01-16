









var shouldBailout = false;
function test0() {
    var obj1 = {};
    var arrObj0 = {};
    var func0 = function (argObj0) {
        var __loopvar4 = 0;
        do {
            __loopvar4++;
        } while (((shouldBailout ? (this.prop1 = {
                            valueOf : function () {
                                WScript.Echo('this.prop1 valueOf');
                                return 3;
                            }
                        }, 1) : 1)) && __loopvar4 < 3)
        var __loopvar3 = 0;
        for (; obj1.prop1 < (1); __loopvar3++ + obj1.prop1++) {
            if (__loopvar3 > 3)
                break;
        }
    }
    arrObj0.method0 = func0;
    obj0 = obj1;
    arrObj0.method0.call(obj0, 1);
};
test0();
shouldBailout = true;
test0();


function test1() {
    var obj0 = {};
    var obj1 = {};
    var arrObj0 = {};
    var func1 = function () {
        if ((obj0.prop1 >= arrObj0.length)) 
        {
        }
        else {
            return f;
        }
        ary.pop();
    }
    var ary = new Array(10);
    var f = 1;
    var __loopvar0 = 0;
    do {
        __loopvar0++;
        func1(obj0);
        obj1.prop0 = (obj0.prop1 = {
                valueOf : function () {
                    return 3;
                }
            }, 1);
    } while ((1) && __loopvar0 < 3)
    WScript.Echo("ary.length = " + ary.length);
};
test1();


function test2()
{
  var obj0 = {};
  obj0.method0 = function() {}; 
  var __loopvar1 = 1;
  do 
  {
    obj0.method0(2147483647 & 1);
  } 
  while(__loopvar1 < 1)
}
test2(); 
test2(); 




function test3()
{
  var obj1 = {};
  var loopvar = 0;
  function func1()
  {
    while (loopvar < 1 && obj1.length < new Object())
    {
      obj1.length;
      ++loopvar;
    }
  }
  func1();
}
test3(); 
test3(); 




function test4()
{
  var arrObj0 = {};
  var func0 = function() {};
  func0(arrObj0);
};
test4(); 
test4(); 





function test5()
{
  function func1() {}
  var ary = new Array(10);
  var obj1 = {};
  var func0 = function(argArr91,argMath92){}
  function leaf() { return 100; };
  var arrObj0 = {};
  var obj0 = {};

  func1(obj1, leaf, ((arrObj0[(((454028936 >= 0 ? 454028936 : 0)) & 0XF)] instanceof ((typeof Object == 'function' ) ? Object : Object)) >= ary[(0)]), (((arrObj0[(((454028936 >= 0 ? 454028936 : 0)) & 0XF)] instanceof ((typeof Object == 'function' ) ? Object : Object)) < ary[(0)]) < (arrObj0[(((454028936 >= 0 ? 454028936 : 0)) & 0XF)] instanceof ((typeof Object == 'function' ) ? Object : Object)))); 

  if (runningJITtedCode)
  {
    obj1.prop0=arrObj0[(6)];
  }
  
  return (~ (func0.call(arrObj0 , obj0, arrObj0, leaf, obj0) != func0.call(obj0 , obj1, arrObj0, leaf, obj0)));
}
test5();
var runningJITtedCode = true;
test5();



var shouldBailout = false;
function test6()
{
  var func2 = function(argFunc5)
  {
    var u = (shouldBailout ? 
      (Object.defineProperty(this, 'prop1', 
        {set: function(_x) { WScript.Echo('this.prop1 setter'); }, configurable: true}), 1) : 
      1);
  }
  this.prop0 = 1; 
  function bar3 (argFunc12, argMath13)
  {
    this.prop1 = 1; 
    this.prop0;
  }
  c = func2(1); 
  bar3(1, 1); 
};
test6(); 
shouldBailout = true;
test6(); 

WScript.Echo("done");
