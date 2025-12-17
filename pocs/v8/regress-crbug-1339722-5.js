const realm = Realm.create();
const globalProxy = Realm.global(realm);

print(() => {
  new B(globalProxy);
}, TypeError, /no access/);

print(() => {
  B.setField(globalProxy);
}, TypeError, /no access/);

print(() => {
  B.getField(globalProxy);
}, TypeError, /no access/);
