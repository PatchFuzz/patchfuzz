var expr = "Dummy value";

var f = function expr() {
  assert(expr === f);
  expr = 6;
  assert(expr === f);
  assert(!(delete expr));
  assert(expr === f);
}

f();

f = function expr() {
  assert(expr === undefined);
  var expr = 6;
  assert(expr === 6);
}

f();

var f = function expr() {
  assert(expr === f);
  eval("var expr = 8");
  assert(expr === 8);
}

f();

var f = function expr(i) {
  assert(expr === f);

  if (i > 0) {
    expr(i - 1);
  }
}

f(10);
