Realm.createAllowCrossRealmAccess();
const global = Realm.global(1);
print(1, Realm.owner(global));
Realm.detachGlobal(1);
print(undefined, Realm.owner(global));
