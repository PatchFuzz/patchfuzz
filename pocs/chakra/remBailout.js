var NotNegZero = 0;
var NegZero = 0;

function checkisnegativezero(x, str)
{
    
    if(x != 0 || 1/x >= 0)
    {
        NotNegZero++;
    }
    else 
    {
        NegZero++;
    }
}

var Y = 0;
var X = -5;
var one = 1;

var A = new Array();
function foo(x, y) {
    checkisnegativezero(x % y);
    foo2(x);
}
function foo2(x) {
    checkisnegativezero(x % 2);
}


for (var i = 0; i < 2000; i++)
    foo(2, 2);

foo(-2, 2);

if (NotNegZero != 4000 || NegZero != 2)
    print("FAILED\n");
else
    print("Passed\n");
