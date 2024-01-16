




if (this.WScript && this.WScript.LoadScriptFile) { 
    this.WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}


var test = function()
{
};
test.prototype.B = function(a,b,c,d){return  a+b+c;};
var A = new test();

function F()
{
    this.init.apply(this,arguments);
}
F.prototype.init = function()
{
    A.B.call(this, arguments);
}
function bar()
{
    return new F(10,30,40,50);
}

bar();
bar();
bar();


function test0(){
  var arrObj0 = {};
  Object.prototype.method0 = 1;
  arrObj0.method0.apply(this, arguments);
};
try
{
    test0();
}
catch(e){}


try
{
    var FloatArr0 = new __og169.Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
    var FloatArr1 = __og169();
}
catch(e){}

WScript.Echo("PASSED\n");


function baz() {
    this.initialize.apply(this.x, arguments);
}

var object = baz;
object.prototype = {
    initialize : function() {
    }
}

function foo()
{
    new object();
}

foo();
foo();
foo();
WScript.Echo("PASSED\n");

function test1(){
    var arrObj0 = {};
    arrObj0[0] = 1;
    function v16037() {
        for(var _strvar0 in arrObj0 ) {
            var v16039 = {
                v16041: function() {
                    return function bar() {
                        this.method0.apply(this, arguments);
                    }
                }
            };
            var v16042 = arrObj0;

            v16042.v16043 = v16039.v16041();

            v16042.v16046 = v16039.v16041();

            v16042.v16046.prototype = {
               method0 : function() {
                   this.v16052 = new v16042.v16043();
               }
            };

            var v16067 = new v16042.v16046(0,0);
        }
    }

    try {
        v16037();
    } catch(e) {}
};
test1();
test1();
WScript.Echo("PASSED\n");


function test2() {
    var protoObj0 = {};
    var obj1 = {};
    var func1 = function () {
        var v12673 = {
                v12675: function () {
                    return function bar() {
                        f /= arguments[(1 >= 0 ? 1 : 0) & 15];
                        this.method0.apply(protoObj0, arguments);
                    };
                }
            };
        var v12676 = protoObj1;
        v12676.prototype = {};
        v12676.v12677 = v12673.v12675();
        v12676.v12677.prototype = {
            method0: function (v12681) {
            }
        };
        v12676.v12679 = v12673.v12675();
        v12676.v12679.prototype = {
            method0: function (v12685) {
                this.v12684 = new v12676.v12677(v12685);
            }
        };
        var v12690 = new v12676.v12677();
        var v12696 = new v12676.v12679();
        var v12697 = new v12676.v12679();
    };
    var f = 1;
    protoObj1 = Object.create(obj1);
    func1();
}
test2();
test2();
WScript.Echo("PASSED\n");


var obj1 = {};
var arrObj0 = {};
var func0 = function () {
    func0.caller;
};

arrObj0.method0 = function (argArrObj2) {
    func0(ary.unshift(func0(), Object()));
};

var ary = Array();
var v0 = {
        v1: function () {
            return function bar() {
                this.method0.apply(obj1, arguments);
            };
        }
    };
arrObj0.method1 = v0.v1();
function v17() {
    this.method0 = function () {
        var uniqobj3 = arrObj0.method1();
    };
}
function v24() {
}
v24.prototype = new v17();
var v25 = new v24();
function v26(v27) {
    v27.method0();
}

v26(v25);
v26(v25);
v26(v25);


function test0() {
  var obj1 = {};
  var protoObj2 = {};
  var func0 = function () {
  };
  var func1 = function () {
    new func0(ui16[4]) ;
  };
  var func4 = function () {
    func1();
  };

  obj1.method1 = func4;
  var ui16 = new Uint16Array();
  var func12 = function () {
    
    obj1.method1.apply({}, arguments);
  };
  var v0 = {
      v1: function () {
        return function bar() {
          func12();
          this.method0.apply({}, arguments);
        };
      }
    };

  Object.prototype.method0 = func0;

  protoObj2.v3 = v0.v1();

  protoObj2.v5 = v0.v1();
  protoObj2.v5.prototype = {
    method0: function () {
      protoObj2.v3();
    }
  };
  var v34 = new protoObj2.v5();
  var v35 = new protoObj2.v5();
  var v36 = new protoObj2.v5();
}
test0();
WScript.Echo("PASSED");

function test3(a,b)
{
  a = a.foo;
  return a.apply(b);
}

function test3Wrapper()
{
  var obj1 = {foo: function(){return this.prop1;}};
  var obj2 = {prop1: 1};
  
  var result = [];
  result.push(test3(obj1, obj2));
  result.push(test3(obj1, obj2));
  result.push(test3(obj1, obj2));
  
  var expected = [1,1,1];
  assert.areEqual(expected, result);
}
test3Wrapper();
WScript.Echo("PASSED");