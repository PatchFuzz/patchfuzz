













function f() {
  var o1 = {e:[]};
  var o2 = o1;

  async function g(a,b) {
      await b;
      o2 = 13.37;
  }
  g("a");
}
f();
