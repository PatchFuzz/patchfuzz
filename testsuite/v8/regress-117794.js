





























print = function() {}

function constructor() {};

function assertHasOwnProperties(object, limit) {
  for (var i = 0; i < limit; i++) {  }
}

try {
  Object.keys();
} catch(exc2) {
  print(exc2.stack);
}

var x1 = new Object();

try {
  new Function("A Man Called Horse", x1.d);
} catch(exc3) {
  print(exc3.stack);
}

try {
  (-(true)).toPrecision(0x30, 'lib1-f1');
} catch(exc1) {
  print(exc1.stack);
}
