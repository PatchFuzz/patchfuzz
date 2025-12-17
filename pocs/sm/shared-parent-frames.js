let f1, f2;

function dos() {
  f1 = saveStack();
  f2 = saveStack();
}

(function uno() {
  dos();
}());



print(f1 == f2, false);

print(f1.parent, f2.parent);
