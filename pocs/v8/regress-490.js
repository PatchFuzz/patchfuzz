var kXXX = 11



var a = '';
while (a.length < (2 << 11)) { a+= 'x'; }


a.replace(/^(.*)/, '$1$1$1');


for (var i = 0; i < 10; i++) {
  var  b = '';
  for (var j = 0; j < 10; j++) {
    b += '$1';

    
    
    a.replace(/^(.*)/, b);
  }
  a += a;
}
