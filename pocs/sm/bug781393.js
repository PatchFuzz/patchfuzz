gczeal(4,1);
function check(o)
{
    print(o);
    print(o.b, 3);
}
function f()
{
    for (var i=0; i<3; i++) {
	var o = {b: 3};
	check(o);
    }
}
f();
