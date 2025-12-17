function Bar() {
    this.x = 42;
}
function foo() {
    var x = new Bar();
    x.__defineSetter__( 0, function() { x; });
    gc(); 
}

%PrepareFunctionForOptimization(Bar);
%PrepareFunctionForOptimization(foo);
foo();
foo();
%OptimizeFunctionOnNextCall(foo);
foo();
