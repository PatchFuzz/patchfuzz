







const realm = Realm.createAllowCrossRealmAccess();
const globalProxy = Realm.global(realm);

checkHasAccess(globalProxy);

Realm.navigate(realm);

checkNoAccessNoThrow(globalProxy);
