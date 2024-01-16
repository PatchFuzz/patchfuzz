





d8.file.execute('test/mjsunit/regress/regress-crbug-1321899.js');

const realm = Realm.create();
const globalProxy = Realm.global(realm);

checkNoAccess(globalProxy, /Error in failed access check callback/);
