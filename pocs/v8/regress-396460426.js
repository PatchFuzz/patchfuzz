Realm.createAllowCrossRealmAccess();
Realm.detachGlobal(1);
let obj = Realm.global(1);
print(() => JSON.stringify(obj));
