





Realm.createAllowCrossRealmAccess();
Realm.detachGlobal(1);
const global_var = Realm.global(1);

function f() {
    return global_var.__proto__;
};

%EnsureFeedbackVectorForFunction(f);
assertThrows(f);
assertThrows(f);
