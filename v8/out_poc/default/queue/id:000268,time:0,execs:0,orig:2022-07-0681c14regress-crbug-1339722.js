







const realm = Realm.create();
const globalProxy = Realm.global(realm);

checkNoAccess(globalProxy, /Error in failed access check callback/);
