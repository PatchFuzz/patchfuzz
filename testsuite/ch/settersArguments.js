




WScript.Echo("Setter has 0 arguments:");
try {
    eval("var o={set foo(){;}};");
} 
catch(e)
{
    WScript.Echo(e.message);
}
WScript.Echo("Setter has 1 argument:");
try {
    eval("var o={set foo(x){;}};");
} 
catch(e)
{
    WScript.Echo(e.message);
}
WScript.Echo("Setter has 2 arguments:");
try {
    eval("var o={set foo(x,y){;}};");
} 
catch(e)
{
    WScript.Echo(e.message);
}