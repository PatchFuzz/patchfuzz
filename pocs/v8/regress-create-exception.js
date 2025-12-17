"use strict";


var v = [1, 2, 3, 4]

Object.preventExtensions(v);

function foo() {
  var re = /2147483647/;  
  for  (var i = 0; i < 10000; i++) {
    var ok = false;
    try {
      var j = 1;
      
      
      
      for (var j = 0; j < i % 93; j++) {
        j *= 1.123567;  
      }
      v[0x7fffffff] = 0;  
      print(false);
      return j;  
    } catch(e) {
      ok = true;
      print(re.test(e), 'e: ' + e);
    }
    print(ok);
  }
}

foo();
