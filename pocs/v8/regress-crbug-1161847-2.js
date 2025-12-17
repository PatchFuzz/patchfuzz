function foo(first_run) {
  let o = { x: 0 };
  if (first_run) print(%HasOwnConstDataProperty(o, 'x'));
  Object.defineProperty(o, 'x', { get() { return 1; }, configurable: true, enumerable: true });
  delete o.x;
  o.x = 23;

  if (%IsDictPropertyConstTrackingEnabled()) {
    
    
    
    
    
    return;
  }

  if (first_run) print(%HasOwnConstDataProperty(o, 'x'));
}
%PrepareFunctionForOptimization(foo);
foo(true);
foo(false);
%OptimizeFunctionOnNextCall(foo);
foo(false);
