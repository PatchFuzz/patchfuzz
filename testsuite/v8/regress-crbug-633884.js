



try {
  
  Realm.eval(Realm.current(), "throw Error(); let blarg");
} catch (e) { }


assertThrows(function() {
  
  eval("var x = 5");
  blarg;
});
