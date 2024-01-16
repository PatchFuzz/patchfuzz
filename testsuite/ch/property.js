








var obj=new Object();

for(x=0;x<5000;x++)
{
    if(x<1000)
    {
        
        eval("var y"+x+"=" + x );

        if(!(eval("y"+x)===x))
            WScript.Echo("FAIL: y"+x+" == " + eval("y"+x) + ".  Expected: " + x);

    }
    else
    {
        
        eval("obj['o"+x+"']="+x );
    }
}





var y=1000;

for(p1 in obj)
{
    if(obj[p1]!==y)
        WScript.Echo("FAIL: obj["+p1+"] == " + (obj[p1]) + ".  Expected: " + y);
    y++;
}
WScript.Echo("done");
