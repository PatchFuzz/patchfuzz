





function f(x,y,z)
{
    switch(x)
    {
        case 1:
           WScript.Echo(1);
           break;
        case 2:
           WScript.Echo(2);
           break;
        case 3:
           WScript.Echo(3);
           break;
        case 4:
           WScript.Echo(4);
           break;
        default:
            WScript.Echo('default-x');
            break;
    }

    switch(y)
    {
        case 1:
            WScript.Echo(1);
            break;
        case 2:
           WScript.Echo(2);
           break;
        case 3:
           WScript.Echo(3);
           break;
        case 4:
           WScript.Echo(4);
           break;
        default:
            WScript.Echo('default-y');
            break;
    }

    switch(z)
    {
        case 1:
            WScript.Echo(1);
            break;
        default:
            WScript.Echo('default-z');
            break;
    }
}


f(1,2,new Object);
f(1,2,3);
f(1,2,3);
f(1,2,3);
f(1,2,3);


for(i=0;i<30;i++)
{
    f(1,new Object,3);
    f(new Object,new Object,3);
}
