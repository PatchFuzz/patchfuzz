function f(fnConstructor) {
    return Object.is(new fnConstructor(), undefined);
}

const realmIndex = Realm.createAllowCrossRealmAccess();
const otherFunction = Realm.global(realmIndex).Function;
Realm.detachGlobal(realmIndex);

%PrepareFunctionForOptimization(f);
print(f(Function));
print(_ => f(otherFunction));
%OptimizeFunctionOnNextCall(f);
print(_ => f(otherFunction));
