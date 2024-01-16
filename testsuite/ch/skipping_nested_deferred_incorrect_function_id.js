




function test0(){
  function a(b = function c() {}) { return () => { return 6; } };
  [0].reduce(function d() {}, 0);
  a()();
}
test0();

console.log("pass");
