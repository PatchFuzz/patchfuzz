





d8.file.execute('test/mjsunit/regress/regress-crbug-1321899.js');

const realm = Realm.create();
const globalProxy = Realm.global(realm);

new B(globalProxy);
B.setField(globalProxy);
assertEquals(undefined, B.getField(globalProxy));
