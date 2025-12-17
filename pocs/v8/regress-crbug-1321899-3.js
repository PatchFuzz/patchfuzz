const realm = Realm.createAllowCrossRealmAccess();
const globalProxy = Realm.global(realm);

checkHasAccess(globalProxy);


Realm.detachGlobal(realm);

checkNoAccess(globalProxy, /no access/);
