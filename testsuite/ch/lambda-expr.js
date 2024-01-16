




try
{
    
    eval("x=>{}/print(1)/+print(2)")
}
catch (e)
{
    print(e.message);
}


x=>{}
/print(1)/+print(2)


x=>{return 2;},y=>{return 3;}


var a = (x=>{return 2;},y=>{return 3;})
print(a())


try
{
    eval("var a = x=>{return 2;},y=>{return 3;}");
}
catch (e)
{
    print(e.message);
}


for (var i = () => {} in {});
