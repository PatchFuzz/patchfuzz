













function check_syntax_error (txt) {
  try {
    eval (txt)
    print(false)
  } catch (e) {
    print(e instanceof SyntaxError)
  }
}

var a = 21;
var b = 10;
var c;

check_syntax_error ("c =  a++b");
check_syntax_error ("c =  a--b");

check_syntax_error ("c = a +* b");
check_syntax_error ("c = a -* b");
check_syntax_error ("c = a +/ b");
check_syntax_error ("c = a -/ b");
check_syntax_error ("c = a +% b");
check_syntax_error ("c = a -% b");

check_syntax_error ("a =* b");
check_syntax_error ("a =/ b");
check_syntax_error ("a =% b");

check_syntax_error ("c = a+");
check_syntax_error ("c = a-");

check_syntax_error("a++\n()");
check_syntax_error("a--\n.b");

print((-2 .toString()) === -2);

Number.prototype[0] = 123;
print(-2[0] === -123);

function f() {
  var a = 0;
  function g() {}

  try {
    eval ("g(this, 'a' = 1)");
    print(false);
  } catch (e) {
    print(e instanceof SyntaxError);
  }

  try {
    eval ("g(this, 'a' += 1)");
    print(false);
  } catch (e) {
    print(e instanceof SyntaxError);
  }

  print(a === 0);
}
f();

function g(a, b)
{
  print(b === "undefined");
}
g(this, typeof undeclared_var)

function h()
{
  var done = false;
  var o = { a: function () { done = (this === o) } }
  function f() {}

  with (o) {
    f(this, a());
  }
  print(done);
}
h();
