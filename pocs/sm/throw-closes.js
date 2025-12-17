;
;


function *g() {
    yield 1;
    yield 2;
    throw 3;
    yield 4;
}
var i = g();
print(i, 1);
print(i, 2);
print(() => i.next(), 3);
print(i);
print(i);


function *h() {
    yield 1;
    yield 2;
}
var i = h();
print(i, 1);
print(() => i.throw(4), 4);
print(i);


function *h2() {
    try {
	yield 1;
	yield 2;
    } finally {
	throw 6;
    }
}
var i = h2();
print(i, 1);
print(() => i.return(4), 6);
print(i);
