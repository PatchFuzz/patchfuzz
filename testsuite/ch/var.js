




var defvar = 10;
WScript.Echo(defvar);
try
{
    WScript.Echo(undefvar);
}
catch (e)
{
    WScript.Echo(e.message);
}
WScript.Echo(this.defvar);
WScript.Echo(this.undefvar);

function func()
{
    WScript.Echo(defvar);
    try
    {
        WScript.Echo(undefvar);
    }
    catch (e)
    {
        WScript.Echo(e.message);
    }

    
    WScript.Echo(this.defvar);
    WScript.Echo(this.undefvar);
    return this;
}

var g = func();

WScript.Echo(g.defvar);
WScript.Echo(g.undefvar);

