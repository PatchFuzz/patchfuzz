



Realm.createAllowCrossRealmAccess();
const global = Realm.global(1);
assertSame(1, Realm.owner(global));
Realm.detachGlobal(1);
assertSame(undefined, Realm.owner(global));
