const realm = Realm.create();
const globalProxy = Realm.global(realm);

checkNoAccess(globalProxy, /no access/);
