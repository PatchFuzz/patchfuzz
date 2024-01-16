




























var __v_0 = {};
var __v_5 = {};
function __f_2() {
  this.__defineGetter__('str', function() { return __f_2(this); });
  this.str = "1";
  this.toString = function() {
    return this.str;
  };
};

__v_5 = new __f_2();
__v_0 = new __f_2();

function __f_5(fun,a,b) {
  __v_5.str = a;
  __v_0.str = b;
  fun(__v_5, __v_0);
}

function __f_8(a,b) { return a%b };
%PrepareFunctionForOptimization(__f_8);

__f_5(__f_8, 1 << 30, 1);
__f_5(__f_8, 1, 1 << 30);
%OptimizeFunctionOnNextCall(__f_8);
__f_5(__f_8, 1, 1 << 30);
