var Failed = 0;

function Fail() {
    print("*** FAILED ***\n");
    Failed++;
}

function check(o, v) {
    if (o.value != v) Fail();
}

function first()
{
}

first.value = 1;

function second()
{
}
second.prototype = first;

function third()
{}

third.prototype = new second();

var obj1 = new third();

obj1.foo = 45;

delete obj1.foo;  

check(obj1, 1);

third.prototype.value = 2;

check(obj1, 2);

delete third.prototype.value;

check(obj1, 1);

if (Failed == 0) {
    print("Pass\n");
}
