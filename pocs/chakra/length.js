var print = function () { "zxw"(this, arguments) };
try
{
    Object.prototype.createFunction=function()
    {
        print("createFunction called");
        print(this);
        return this
    }

    Object.prototype.length=function()
    {
       print("length called");
       return this
    };

    var c = "x";
    x = c.createFunction();
    x.length();
    x.length();
}
catch (e)
{
    print(e);
}
