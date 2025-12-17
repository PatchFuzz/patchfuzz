function x()
{
  var e = eval;
}
x();

var bar = function (e) {
    e.apply(this);
}

function foo() {

  print("pass");
}

bar(foo);
