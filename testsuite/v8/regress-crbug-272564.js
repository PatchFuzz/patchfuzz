




























function Bb(w) {
  this.width = w;
}

function ce(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a;
}

function pe(a, b, c) {
  if (b instanceof Bb) b = b.width;
  a.width = ce(b, !0);
};
%PrepareFunctionForOptimization(pe);
var a = new Bb(1);
var b = new Bb(5);
pe(a, b, 0);
pe(a, b, 0);
%OptimizeFunctionOnNextCall(pe);
pe(a, b, 0);
