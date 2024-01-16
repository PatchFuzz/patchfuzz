




























function bar(a, b) { with(a) {return a + b;} }

var obj = {
  functions: [bar, bar, bar, bar],
  receivers: [bar, bar, undefined, null],
  foo: function () {
    for (var a = this.functions, e = this.receivers, c = a.length,
         d = 0; d < c ; d++) {
      a[d].apply(e[d], arguments)
    }
  }
};

%PrepareFunctionForOptimization(obj.foo);
obj.foo(1, 2, 3, 4);
obj.foo(1, 2, 3, 4);
%OptimizeFunctionOnNextCall(obj.foo);
obj.foo(1, 2, 3, 4);
