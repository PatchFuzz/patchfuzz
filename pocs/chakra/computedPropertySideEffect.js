function f() 
{
    var v0 = 1;
    var o = { [v0++] : v0 };
    if (o[1] !== 2)
    {
        print('fail1: o[1] === ', o[1]);
    }
}
f();

function g() 
{
    var v0 = 1;
    var o = { [v0++] : v0 };
    function h() { return v0; }
    if (o[1] !== 2)
    {
        print('fail2: o[1] ===', o[1]);
    }
}
g();

function h()
{
    var v0 = 1;
    var o = { [v0] : v0 = 2};
    function h() {}
    if (o[1] !== 2)
    {
        print('fail3: o[1] === ', o[1]);
    }
}
h();

print('pass');    