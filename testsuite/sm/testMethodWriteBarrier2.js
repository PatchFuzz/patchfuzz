function C() {
    this.m = function () {};  
}

var a = [new C, new C, new C, new C, new C, new C, new C, new C, new C];
var b = [new C, new C, new C, new C, new C, new C, a[8],  new C, new C];

var thrown = 'none';
try {
    for (var i = 0; i < 9; i++) {
	a[i].m();
	b[i].m = 0.7;  
    }
} catch (exc) {
    thrown = exc.name;
}
assertEq(thrown, 'TypeError');
