{
  const realm = Realm.createAllowCrossRealmAccess();
  const global = Realm.global(realm);
  function Base() { return global; }
  let i = 0;
  class Klass extends Base {
    field = i++;
  }
  let a = new Klass();
  print(a.field, 0);
  a = new Klass();
  print(a.field, 1);
}

{
  const realm = Realm.create();
  const global = Realm.global(realm);
  function Base() { return global; }
  let i = 0;
  class Klass extends Base {
    field = i++;
  }
  print(() => new Klass(), Error, /no access/);
  print(() => new Klass(), Error, /no access/);
}
