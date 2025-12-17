var a = [];
a[4294967294] = 8;
try
{
    a.splice(4294967295,0,1); 
}
catch(e)
{
    print("PASS");
}