



d8.file.execute('test/mjsunit/regress/regress-crbug-1321899.js');


const realm = Realm.createAllowCrossRealmAccess();
const detached = Realm.global(realm);
Realm.detachGlobal(realm);

checkNoAccess(detached, /no access/);
