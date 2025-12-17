let globalLexical = 3;

function changeGlobalLexical(i) {
  with (this) {} 
  if (i === 1900) {
    globalLexical = 5;
  }
}

function f() {
  var res = 0;
  for (var i = 0; i < 2000; i++) {
    res += globalLexical;
    changeGlobalLexical(i);
  }
  print(res, 6198);
}
f();
