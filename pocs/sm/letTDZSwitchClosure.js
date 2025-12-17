function print(f) {
  var err;
  try {
    f();
  } catch (e) {
    err = e;
  }
  print(err instanceof ReferenceError, true);
}

function f() {
    switch (0) {
        case 1:
            let x
        case function() {
            print(x)
        }():
    }
}
print(f);

function g() {
  switch (0) {
    case 1:
      let x;
    case 0:
      var inner = function () {
        print(x);
      }
      inner();
      break;
  }
}
print(g);

function h() {
  switch (0) {
    case 0:
      var inner = function () {
        print(x);
      }
      inner();
    case 1:
      let x;
  }
}
print(h);


function F() {
  switch (0) {
    case 0:
      let x = 42;
      var inner = function () {
        print(x, 42);
      }
      inner();
  }
}
F();
