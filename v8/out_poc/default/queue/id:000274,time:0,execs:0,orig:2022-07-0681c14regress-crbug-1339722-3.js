








const realm = Realm.createAllowCrossRealmAccess();
const globalProxy = Realm.global(realm);

checkHasAccess(globalProxy);


Realm.navigate(realm);

checkNoAccess(globalProxy, /Error in failed access check callback/);
