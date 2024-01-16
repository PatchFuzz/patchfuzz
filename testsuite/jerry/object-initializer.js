













switch (1) {
default:
  var o = {
    value: 10,
    func() {
      return 234 + this.value;
    },
    ["a" + "b"]() {
      return 456 - this.value;
    }
  }
}

assert(o.func() === 244);
assert(o.ab() === 446);

switch (1) {
default:
  var ab = 5;
  var cd = 6;
  o = {
    ab,
    cd: 8,
    cd
  }
}

assert(o.ab === 5);
assert(o.cd === 6);

function exception_expected(str) {
  try {
    eval(str);
    assert(false);
  } catch (e) {
    assert(e instanceof SyntaxError);
  }
}


exception_expected('({ true })');
exception_expected('({ 13 })');
exception_expected('({ "x" })');

switch (1) {
default:
  
  ({ true: true });
  ({ 13: 13 });
  ({ "x": "x" });

  var get = 8;
  var set = 12;
  var o = ({ get, set });

  assert(o.get == 8);
  assert(o.set == 12);
}

var obj = { get() { return 5; }, set() { return 6; } };

assert (obj.get() === 5);
assert (obj.set() === 6);
