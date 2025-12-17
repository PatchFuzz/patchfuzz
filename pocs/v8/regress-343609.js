function Ctor() {
  this.a = 1;
}

function get_closure() {
  return function add_field(obj) {
    obj.c = 3;
    obj.a = obj.a + obj.c;
    return obj.a;
  }
}
function get_closure2() {
  return function cc(obj) {
    obj.c = 3;
    obj.a = obj.a + obj.c;
  }
}

function dummy() {
  (function () {
    var o = {c: 10};
    var f1 = get_closure2();
    %PrepareFunctionForOptimization(f1);
    f1(o);
    f1(o);
    %OptimizeFunctionOnNextCall(f1);
    f1(o);
  })();
}

var o = new Ctor();
function opt() {
  (function () {
    var f1 = get_closure();
    %PrepareFunctionForOptimization(f1);
    f1(new Ctor());
    f1(new Ctor());
    %OptimizeFunctionOnNextCall(f1);
    f1(o);
  })();
}


opt();
opt();
opt();



dummy();
dummy();


for(var i = 0; i < 3; i++) gc(true);


o.c = 2.2;


var f2 = get_closure();
f2(new Ctor());
