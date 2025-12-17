let x;
Realm.eval(Realm.current(), "let y");
print(delete x);
print(delete y);
print(eval("delete x"));
print(eval("delete y"));

(function() {
  let z;
  print(delete x);
  print(delete y);
  print(delete z);
  print(eval("delete x"));
  print(eval("delete y"));
  print(eval("delete z"));
})();

print(eval("let z; delete z"));
