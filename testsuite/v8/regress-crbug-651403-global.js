





x = "";

function f () {
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
