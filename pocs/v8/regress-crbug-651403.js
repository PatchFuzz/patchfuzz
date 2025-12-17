function f () {
  var x = "";
  function g() {
    try {
      eval('');
      return x;
    } catch(e) {
    }
  }
  return g();
}

f();
f();
