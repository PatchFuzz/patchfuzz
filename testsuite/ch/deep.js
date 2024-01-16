






var n = 0;
var count = 30;

function Create(x)
{
    this[n++] = x;
    Create.prototype = this;
}

var a = new Array(count);

for(var i = 0; i < count; ++i)
{
    var x = new Create(i);
    a[i] = x;
}

for(var i = 0; i < count; ++i)
{
    WScript.Echo("starting " + i);

    
    for(var j = 0; j <= i+1; ++j)
    {
        WScript.Echo("" + a[i][j]);
    }
}
