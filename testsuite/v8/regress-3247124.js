


























var foo = unescape("%E0%E2%EA%F4%FB%E3%F5%E1%E9%ED%F3%FA%E7%FC%C0%C2%CA%D4%DB%C3%D5%C1%C9%CD%D3%DA%C7%DC");

function bar(x) {
  var s = new String(x);
  var a = new String(foo);
  var b = new String('aaeouaoaeioucuAAEOUAOAEIOUCU');

  var i = new Number();
  var j = new Number();
  var c = new String();
  var r = '';

  for (i = 0; i < s.length; i++) {
    c = s.substring(i, i + 1);
    for (j = 0; j < a.length; j++) {
      if (a.substring(j, j + 1) == c) {
        c = b.substring(j, j + 1);
      }
    }
    r += c;
  }

  return r.toLowerCase();
}

for (var i = 0; i < 100; i++) bar(foo);
