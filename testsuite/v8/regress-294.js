





























function f() { return false; }

function test(x) {
  var y = x;
  if (x == "kat") x = "kat";
  else {
    x = "hund";
    var z = f();
    if (!z) x = "kat";
  }
}

test("hund");
