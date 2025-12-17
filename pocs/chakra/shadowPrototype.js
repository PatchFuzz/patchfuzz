function check(o, v)
{
    o.value(v);
}

function first()
{
}

function isFirst(v) { print(`v is ${v} expecting 1.`, true); }
function isSecond(v) { print(`v is ${v} expecting 2.`, true); }

first.value = isFirst;

function second()
{
}
second.prototype = first;

function third()
{}

third.prototype = new second();

var obj1 = new third();

print(testFunction, 50);



function testFunction()
{
    check(obj1, 1);

    third.prototype.value = isSecond;

    check(obj1, 2);

    delete third.prototype.value;

    check(obj1, 1);

    emitTTDLog(ttdLogURI);
}
