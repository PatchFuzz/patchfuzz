



d8.file.execute('test/mjsunit/regress/regress-crbug-1321899.js');


const realm = Realm.createAllowCrossRealmAccess();
const globalProxy = Realm.global(realm);

checkHasAccess(globalProxy);


Realm.detachGlobal(realm);

checkNoAccess(globalProxy, /no access/);
