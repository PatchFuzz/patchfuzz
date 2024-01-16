




function test4()
{
    
    
   return obj.C + obj.F;
}

var obj = {D:5,F:2};
Object.prototype.C = 10;
WScript.Echo(test4());
obj.B = 5;
WScript.Echo(test4());



WScript.Echo(test4());
obj.C = 99;
WScript.Echo(test4());


