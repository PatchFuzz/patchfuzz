

var a = 5;
var a = 6;
let b = 7;

assert (a === 6);
assert (this.a === 6);
assert (b === 7);
assert (this.b === undefined);

{
  let c;
  c = 8;

  {
    let c = 9;
    assert (c === 9);
  }

  {
    function c() { return 10 }
    assert (c() === 10);
  }

  assert (c === 8);
}
assert (typeof c === "undefined");

