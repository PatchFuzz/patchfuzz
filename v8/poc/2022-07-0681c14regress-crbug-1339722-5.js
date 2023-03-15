







const realm = Realm.create();
const globalProxy = Realm.global(realm);

new B(globalProxy);
B.setField(globalProxy);
print(undefined, B.getField(globalProxy));
