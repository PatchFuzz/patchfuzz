;

function*g(){ };
o = g();
o.next();
function TestException() {};
print(() => o.throw(new TestException()), TestException);
