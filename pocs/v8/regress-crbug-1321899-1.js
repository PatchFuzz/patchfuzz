const realm = Realm.createAllowCrossRealmAccess();
const detached = Realm.global(realm);
Realm.detachGlobal(realm);

checkNoAccess(detached, /no access/);
