function c4(w, h) {
  var size = w * h;
  if (size < 0) size = 0;
  return new Uint32Array(size);
}

for (var i = 0; i < 3; i++) {
  
  
  c4(0, -1);
}

for (var i = 0; i < 1000; i++) c4(2, 2);


var bomb = c4(2, 2);

function reader(o, i) {
  
  try {
  } catch (e) {
  }
  return o[i];
}

;
%PrepareFunctionForOptimization(reader);
for (var i = 0; i < 3; i++) reader(bomb, 0);
%OptimizeFunctionOnNextCall(reader);
reader(bomb, 0);

for (var i = bomb.length; i < 100; i++) {
  print(undefined, reader(bomb, i));
}
