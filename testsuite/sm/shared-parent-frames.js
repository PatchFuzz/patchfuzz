


let f1, f2;

function dos() {
  f1 = saveStack();
  f2 = saveStack();
}

(function uno() {
  dos();
}());



assertEq(f1 == f2, false);

assertEq(f1.parent, f2.parent);
