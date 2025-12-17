(function() {
  var head = new Array(1);
  var tail = head;

  
  
  for (var i = 0; i < 200; i++) {
    tail[1] = new Array(1000);
    tail = tail[1];
  }
  array = new Array(100);
  gc(); gc();

  
  
  
  print(100, array.length);
  for (var i = 0; i < 50; i++) {
    array.shift();
  }
  print(50, array.length);

  
  
  
  
  for (var i = 0; i < 200; i++) {
    tail[1] = new Array(1000);
    tail = tail[1];
  }
})();
