let o0 = {};
function f1() {
    function f2() {
    }
    function F4( a8) {
        function f10() {
            a8 = f2;
        }
        o0 = a8;
    }
    %PrepareFunctionForOptimization(f2);
    %PrepareFunctionForOptimization(F4);
    new F4();
}
%PrepareFunctionForOptimization(f1);
f1();
f1();
%OptimizeFunctionOnNextCall(f1);
f1();
