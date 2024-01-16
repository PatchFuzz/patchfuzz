













function canIoncompile() {
  while (true) {
    var i = inIon();
    if (i)
      return i;
  }
}

if (canIoncompile() != true)
  quit();
if ("gczeal" in this)
  gczeal(0);

function pushLimits(limit, offset, arr, freeze) {
  arr = arr || [];
  arr.push(0,1,2,3,4,5,6,7,8,9);
  arr.length = offset;
  var l = arr.length;
  var was = inIon();
  oomAtAllocation(limit);
  try {
    for (var i = 0; i < 50; i++)
      arr.push(0,1,2,3,4,5,6,7,8,9);
    if (freeze)
      arr.frozen();
    for (var i = 0; i < 100; i++)
      arr.push(0,1,2,3,4,5,6,7,8,9);
  } catch (e) {
    
  }
  resetOOMFailure();
  assertEq(arr.length % 10, l);
  
  var is = inIon();
  return was ? is ? 1 : 2 : 0;
}



var limit = 1024 * 1024 * 1024;
while(true) {
  var res = pushLimits(limit, 0);

  if (res == 0) {
    limit = 1024 * 1024 * 1024;
  } else if (res == 1) { 
    if (limit <= 1) 
      break;
    
    
    limit = (limit / 2) | 0;
  } else if (res == 2) { 
    if (limit < 10) {
      
      
      for (var off = 1; off < 10; off++) {
        var arr = [];
        try {
          pushLimits(limit, off, arr, true);
        } catch (e) {
          
        }
        if (arr.length > 10) assertEq(arr[arr.length - 1], 9);
        else assertEq(arr[arr.length - 1], arr.length - 1);
      }
    }
    if (limit == 1)
      break;
    limit--;
  }
}
