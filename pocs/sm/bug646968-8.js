;

var x = 5;
{
    let x = eval("this.x++");
    print(evalInFrame(0, "x"), 5);
}
print(x, 6);
