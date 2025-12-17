print("Setter has 0 arguments:");
try {
    eval("var o={set foo(){;}};");
} 
catch(e)
{
    print(e.message);
}
print("Setter has 1 argument:");
try {
    eval("var o={set foo(x){;}};");
} 
catch(e)
{
    print(e.message);
}
print("Setter has 2 arguments:");
try {
    eval("var o={set foo(x,y){;}};");
} 
catch(e)
{
    print(e.message);
}