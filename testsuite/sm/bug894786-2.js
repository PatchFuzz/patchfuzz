
function f56(x) {
  var a = x >>> 0; 
  var b = 0x800000; 
  if (a > 0) {
    
    var c = a * b; 
    var d = c + 1; 
    return (d | 0) & 1;
  } else {
    return 1;
  }
}

function f55(x) {
  var a = x >>> 0; 
  var b = 0x400000; 
  if (a > 0) {
    
    var c = a * b; 
    var d = c + 1; 
    return (d | 0) & 1;
  } else {
    return 1;
  }
}


function f54(x) {
  var a = x >>> 0; 
  var b = 0x200000; 
  if (a > 0) {
    
    var c = a * b; 
    var d = c + 1; 
    return (d | 0) & 1;
  } else {
    return 1;
  }
}


function f53(x) {
  var a = x >>> 0; 
  var b = 0x100000; 
  if (a > 0) {
    
    var c = a * b; 
    var d = c + 1; 
    return (d | 0) & 1;
  } else {
    return 1;
  }
}

function f52(x) {
  var a = x >>> 0; 
  var b = 0x80000; 
  if (a > 0) {
    
    var c = a * b; 
    var d = c + 1; 
    return (d | 0) & 1;
  } else {
    return 1;
  }
}

function f51(x) {
  var a = x >>> 0; 
  var b = 0x40000; 
  if (a > 0) {
    
    var c = a * b; 
    var d = c + 1; 
    return (d | 0) & 1;
  } else {
    return 1;
  }
}

var e = Math.pow(2, 32);
for (var i = 1; i < e; i = i * 1.5) {
    var x = i >>> 0;
    assertEq(f56(x) , (x >= Math.pow(2, 30)) ? 0 : 1);
    assertEq(f55(x), (x >= Math.pow(2, 31)) ? 0 : 1);
    assertEq(f54(x), 1);
    assertEq(f53(x), 1);
    assertEq(f52(x), 1);
    assertEq(f51(x), 1);
}
