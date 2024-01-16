




var value = 10;
function f1(arguments)
{
    if (arguments === value) {
        print("PASSED");
    } else {
        print("FAILED : " + arguments);
    }
}
f1(value);