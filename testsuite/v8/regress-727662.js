





(function() {
function thingo(i, b) {
  var s = b ? "ac" : "abcd";
  i = i >>> 0;
  if (i < s.length) {
    var c = s.charCodeAt(i);
    gc();
    return c;
  }
};
%PrepareFunctionForOptimization(thingo);
thingo(0, true);
thingo(0, true);
%OptimizeFunctionOnNextCall(thingo);
thingo(0, true);
})();
