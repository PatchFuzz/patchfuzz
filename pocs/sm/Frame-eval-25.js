;
;

function h() {
  evalInFrame(1, "a.push(0)");
}

function f() {
  var a = arguments;
  h();
}

print(f, TypeError);

function g() {
  {
    let a = arguments;
    h();
  }
}

print(g, TypeError);
