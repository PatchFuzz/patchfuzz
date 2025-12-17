let x = 2;

function simple() {
  for (var i = 0; i < 10; i++) {
    x = i;
    print(x, i);
  }
}

function setname() {
  function set(obj, v) {
    with (obj) {
      x = v;
    }
  }

  set({}, 100)
  print(x, 100);
  set({x: 1}, 0);
  print(x, 100);
  set({__proto__: {x: 1}}, 13);
  print(x, 100);
}


function noshadow() {
  for (var i = 0; i < 20; i++) {
    x = i;
    print(x, i);

    if (i == 10) {
      globalThis.x = "haha";
      print(x, 10);
    }
  }
}

function uninitialized() {
  for (var i = 0; i < 20; i++) {
    var threw = false;
    try {
      undef = 2;
    } catch {
      threw = true;
    }
    print(threw, true);
  }
}

function simpleStrict() {
  "use strict";
  for (var i = 0; i < 10; i++) {
    x = i;
    print(x, i);
  }
}



function noshadowStrict() {
  "use strict";
  for (var i = 0; i < 20; i++) {
    x = i;
    print(x, i);

    if (i == 10) {
      globalThis.x = "haha";
      print(x, 10);
    }
  }
}

function uninitializedStrict() {
  for (var i = 0; i < 20; i++) {
    var threw = false;
    try {
      undef = 2;
    } catch {
      threw = true;
    }
    print(threw, true);
  }
}

simple();
setname();
noshadow();
uninitialized();
simpleStrict();
noshadowStrict();
uninitializedStrict();

let undef = 42;
