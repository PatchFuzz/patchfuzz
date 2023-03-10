



{
  const realm = Realm.createAllowCrossRealmAccess();
  const foo = Realm.eval(realm, "function foo() {return globalThis.foo}; foo");
  print(foo(), foo);
}

{
  const realm = Realm.createAllowCrossRealmAccess();
  const foo = Realm.eval(realm, "function foo() {return globalThis.foo}; foo");
  print(foo(), foo);
  Realm.detachGlobal(realm);
}
