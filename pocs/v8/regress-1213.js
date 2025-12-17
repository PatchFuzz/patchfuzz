var x = 0;

function TestGlobal() {
  for (var i = 0; i < 2; i++) {
    x = x + 1;
  }
  this.eval('function x() {};');
  delete this['x'];
}

TestGlobal();
TestGlobal();
