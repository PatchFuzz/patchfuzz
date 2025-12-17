function main() {
  function g() {
    function h() {
      f;
    }
    {
      function f() {}
    }
    f;
    throw new Error();
  }
  g();
}
main();
