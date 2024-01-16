



let x;
Realm.eval(Realm.current(), "let y");
assertFalse(delete x);
assertFalse(delete y);
assertFalse(eval("delete x"));
assertFalse(eval("delete y"));

(function() {
  let z;
  assertFalse(delete x);
  assertFalse(delete y);
  assertFalse(delete z);
  assertFalse(eval("delete x"));
  assertFalse(eval("delete y"));
  assertFalse(eval("delete z"));
})();

assertFalse(eval("let z; delete z"));
