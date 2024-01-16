




























var non_const_true = true;

function f(o) {
  return non_const_true && (o.val == null || false);
}


;
%PrepareFunctionForOptimization(f);
var realm = Realm.create();
var realmObject = Realm.eval(realm, 'function g() {}; var o = { val:g }; o;');


assertFalse(f(realmObject));
assertFalse(f(realmObject));


%OptimizeFunctionOnNextCall(f);
assertFalse(f(realmObject));
