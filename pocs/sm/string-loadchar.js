function latin1AndTwoByte() {
  for (var i = 0; i <= 0x03FF; ++i) {
    var s = String.fromCodePoint(i);
    print(s[0], s);
    print(s.charAt(0), s);
  }
}

for (var i = 0; i < 2; ++i) {
  latin1AndTwoByte();
}


function stringAndArray() {
  var xs = [["\u0100"], "\u0100"];
  for (var i = 0; i < 200; ++i) {
    var x = xs[i & 1];
    var s = x[0];
    print(s.length, 1);
    print(s, "\u0100");
  }
}

for (var i = 0; i < 2; ++i) {
  stringAndArray();
}

function outOfBoundsFailureThenException() {
  var name = "Object";

  var j = 0;
  while (true) {
    
    
    name[j++].does_not_exist;
  }
}

for (var i = 0; i < 2; ++i) {
  try {
    outOfBoundsFailureThenException();
  } catch {}
}
