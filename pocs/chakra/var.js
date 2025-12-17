var defvar = 10;
print(defvar);
try
{
    print(undefvar);
}
catch (e)
{
    print(e.message);
}
print(this.defvar);
print(this.undefvar);

function func()
{
    print(defvar);
    try
    {
        print(undefvar);
    }
    catch (e)
    {
        print(e.message);
    }

    
    print(this.defvar);
    print(this.undefvar);
    return this;
}

var g = func();

print(g.defvar);
print(g.undefvar);

