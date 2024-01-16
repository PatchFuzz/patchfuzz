




function testOptionalCall() {
  for (var i = 0; i < 100; ++i) {
    var x = [1, 2, 3];
    x.splice?.(0);
  }
}

for (var i = 0; i < 5; ++i) { testOptionalCall(); }


function testOptionalProp() {
  for (var i = 0; i < 100; ++i) {
    var x = [1, 2, 3];
    x?.splice(0);
  }
}

for (var i = 0; i < 5; ++i) { testOptionalProp(); }


function testOptionalChain() {
  for (var i = 0; i < 100; ++i) {
    var x = [1, 2, 3];
    var o = {x};
    o?.x.splice(0);
  }
}

for (var i = 0; i < 5; ++i) { testOptionalChain(); }
