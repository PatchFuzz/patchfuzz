




function bar ()
{
    var d = [];
    var m = function(){var a=d,b;if(!a.length)return;d=[];}  
    m();
}
bar();
WScript.Echo("Pass");