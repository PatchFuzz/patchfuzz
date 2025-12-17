function r(v) {
  return v.f;
}
function h() {}
function y(v) {
  var x = arguments;
  h.apply(r(v), x);
};
%PrepareFunctionForOptimization(y);
;
y({f: 3});
y({f: 3});
y({f: 3});

%OptimizeFunctionOnNextCall(y);

y({f: 3, u: 4});
