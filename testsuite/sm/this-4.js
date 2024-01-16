

var f = () => this;
assertEq(f(), this);
assertEq({f: f}.f(), this);
