






function print(x) { WScript.Echo(x + ''); }



Function.prototype.x = 'Function.x';
function proto() { }



function foo1(o) {
    var y = o.y;
    var x = o.x;
    print(o.x);
}

function bar1(o) {
    proto1.prototype.x = 'new x';
}

function proto1() { }
proto1.prototype = proto;
proto1.prototype.y = 'y';
var o1 = new proto1();

foo1(o1);
foo1(o1);
bar1(o1);
foo1(o1);



function foo2(o) {
    var y = o.y;
    var x = o.x;
    print(o.x);
}

function bar2(o) {
    delete proto2.prototype.x;
}

function proto2() { }
proto2.prototype = proto;
proto2.prototype.x = 'x';
proto2.prototype.y = 'y';
var o2 = new proto2();

foo2(o2);
foo2(o2);
bar2(o2);
foo2(o2);



var o3 = {};
Object.prototype.x = 'no';
Object.prototype.y = 'yes';
Object.prototype.foo = foo3;
function foo3() {
    o3.x = this.y;
    print(this.x);
}

o3 = new foo3();
o3.foo();



function test4(){
  var obj0 = {};
  var obj1 = {};
  var func0 = function(p0){
    var litObj5 = {prop0: (-- obj1.prop0), prop1: 1, prop2: 1, prop3: 1, prop4: 1, prop5: 1, prop6: 1, prop7: 1};
  }
  Object.prototype.prop5 = 1;
  for (var __loopvar0 = 0; __loopvar0 < 3; ++__loopvar0) {
    obj2 = func0(1, 1, 1);
    function func4 (){
      if (((obj1.prop0 >>= 1) >>> ((this.prop5)))) {
        for (var strvar0 in obj1 ) {
          this.prop5 >>>=1;
          obj0.prop3 = ((obj0.prop6 ^= this.prop5));
          break ;
        }
      }
      WScript.Echo("obj0.prop6 = " + (obj0.prop6|0));
    }
    if (func4()) {
    }
  }
};


test4();


test4();
