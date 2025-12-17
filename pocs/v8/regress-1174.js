function Regular() {
  this[0] >>=  0;
  this[1] ^=  1;
}

function foo() {
  var regular = new Regular();
  %DeoptimizeFunction(Regular);
}

foo();
