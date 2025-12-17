var shouldBailout = false;
function test0(){
  var g = 1;
  if(shouldBailout)
   {
    g = { valueOf: function() { print('g value1Of'); return 3; } }
   }

  var __loopvar2 = 1;

  do {
    switch(g) {
      case 1:
       d = 1;
      case 2:
        d = 2;
      case 3:
    d = 3;
      case 4:
    d = 4;
     default:
    d = -1;
    }
  } while(__loopvar2 < 1)
  return d;
};

print(test0());
shouldBailout = true;
print(test0());
