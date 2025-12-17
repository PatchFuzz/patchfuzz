Error.prepareStackTrace = () => 299792458;

{
  const that_realm = Realm.create();
  const result = Realm.eval(that_realm,
      "() => { Error.prepareStackTrace = () => 42; return new Error(); }")();
  print(42, result.stack);
}
{
  const that_realm = Realm.create();
  const result = Realm.eval(that_realm,
      "() => { Error.prepareStackTrace = () => 42; " +
      "class MyError extends Error {}; return new MyError(); }")();
  print(42, result.stack);
}
{
  const that_realm = Realm.create();
  const result = Realm.eval(that_realm,
      "() => { Error.prepareStackTrace = () => 42; return {}; }")();
  print("stack" in result);
}
