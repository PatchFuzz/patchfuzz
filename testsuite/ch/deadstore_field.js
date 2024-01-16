




function func()
{
    WScript.Echo(i);
}

var i;
i = 0; 
i = 1;
WScript.Echo(i);

i = 0;  
func();
i = 1;
WScript.Echo(i);

i = 0;  
var obj = this;
var j = obj.i;
obj.i = -1;
i = 1;  
WScript.Echo(i);
