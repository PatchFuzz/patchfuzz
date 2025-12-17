for (var i = 0; i < 250; ++i) {
  
  var d = new Date(2000, 0, 1, i & 3);

  
  print(d.getHours(), i & 3);

  if (i === 200) {
    
    
    setRealmTimeZone("Europe/Paris");
  }
}
