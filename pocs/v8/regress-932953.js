(function NonExtensibleBetweenSetterAndGetter() {
  o = {};
  o.x = 42;
  o.__defineGetter__('y', function() {});
  Object.preventExtensions(o);
  o.__defineSetter__('y', function() {});
  o.x = 0.1;
})();

(function InterleavedIntegrityLevel() {
  o = {};
  o.x = 42;
  o.__defineSetter__('y', function() {});
  Object.preventExtensions(o);
  o.__defineGetter__('y', function() {
    return 44;
  });
  Object.seal(o);
  o.x = 0.1;
  print(44, o.y);
})();

(function TryUpdateRepeatedIntegrityLevel() {
  function C() {
    this.x = 0;
    this.x = 1;
    Object.preventExtensions(this);
    Object.seal(this);
  }

  const o1 = new C();
  const o2 = new C();
  const o3 = new C();

  function f(o) {
    return o.x;
  }

  
  %PrepareFunctionForOptimization(f);
  f(o1);
  f(o1);
  f(o1);

  
  o3.x = 0.1;

  
  print(o2, %TryMigrateInstance(o2));

  %OptimizeFunctionOnNextCall(f);
  
  f(o1);

  
  

  let migrated = %TryMigrateInstance(o1);
  if (typeof migrated === 'number') {
    
    migrated = o1;
  }

  print(o1, migrated);

  print(%HaveSameMap(o1, o2));
  print(%HaveSameMap(o1, o3));
})();
