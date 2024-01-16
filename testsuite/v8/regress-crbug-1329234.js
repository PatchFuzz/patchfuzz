



try {
  Realm.createAllowCrossRealmAccess();
  var div = new d8.dom.Div();
  div['nodeType']();
} catch (err) {
  console.log(err);
}
