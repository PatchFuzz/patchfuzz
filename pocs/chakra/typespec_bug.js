var f = 2147483647;
var func1 = function (argMath3) {
    if ( f < argMath3)
    {
        f++;
    }
};
func1(3);
func1(4);
func1(4702209150613300000);
if (f == 2147483648)
{
    print("Passed");
}
else
{
    print("Fail");
}
