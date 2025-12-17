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

function pushLimits(limit, offset) {
  function pusher() {
    Array.prototype.push.apply(arr, arguments)
  }
  var arr = [0,1,2,3,4,5,6,7];
  arr.length = offset;
  var l = arr.length;
  var was = inIon();
  oomAtAllocation(limit);
  try {
    for (var i = 0; i < 100; i++)
      pusher(0,1,2,3,4,5,6,7);
  } catch (e) {
    
  }
  resetOOMFailure();
  print(arr.length % 8, l);
  
  var is = inIon();
  return was ? is ? 1 : 2 : 0;
}





var limit = 1024 * 1024 * 1024;
while(true) {
  var res = pushLimits(limit, 0);
  print(limit, res);

  if (res == 0) {
    limit = 1024 * 1024 * 1024;
  } else if (res == 1) { 
    
    
    limit = (limit / 1.5) | 0;
    if (limit == 0) 
      break;
  } else if (res == 2) { 
    if (limit < 10) {
      
      
      for (var off = 1; off < 8; off++)
        pushLimits(limit, off);
    }
    if (limit == 1)
      break;
    limit--;
  }
}
