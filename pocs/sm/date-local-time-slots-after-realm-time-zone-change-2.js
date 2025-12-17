var dates = [
  new Date(2000, 0, 1, 0),
  new Date(2000, 0, 1, 1),
  new Date(2000, 0, 1, 2),
  new Date(2000, 0, 1, 3),
];

var addToHours = 0;

for (var i = 0; i < 250; ++i) {
  
  var d = dates[i & 3];

  
  print(d.getHours(), (i & 3) + addToHours);

  if (i === 200) {
    
    
    setRealmTimeZone("EST5EDT");

    
    addToHours = 3;
  }
}
