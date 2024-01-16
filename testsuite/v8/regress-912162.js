





var a = new Array();
a.prototype = a;

function f() {
 a.length = 0x2000001;
 a.push();
}

({}).__proto__ = a;

f()
f()

a.length = 1;
a.fill(-255);

%HeapObjectVerify(a);
