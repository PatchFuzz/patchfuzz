var w;
function RunTest()
{
    var x = "Left" + "Dead";
    var y;
    if (x) {
        y = x;
        x = x + " ZOMBIE";
    }
    w = x + " ALIVE!";
    return y + "";
}
var res = RunTest();
if (res !== "LeftDead")
{
    print(res);
    print("FAILED");
}
else
{
    print("Passed");
}

