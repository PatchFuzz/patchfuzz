





function f(x,y)
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
        case 'hello':   
            WScript.Echo('hello');
            break;
        case 5:
            WScript.Echo(5);
            break;
        case 6:
            WScript.Echo(6);
            break;
        case 7.1:   
            WScript.Echo(7);
            break;
        case 8:
            WScript.Echo(8);
            break;
        case 9:
            WScript.Echo(9);
            break;
        default:
            WScript.Echo('default');
            break;
    }

    
    switch(y)
    {
        case 11:
           WScript.Echo(10);
           break;
        case 12:
            WScript.Echo(12);
           break;
        case 13:
            WScript.Echo(13);
            break;
        case 14:
            WScript.Echo(14);
            break;
        case f: 
            WScript.Echo(15);
            break;
        case 16:
            WScript.Echo(16);
            break;
        case 17:
            WScript.Echo(17);
            break;
        case 18:
            WScript.Echo(18);
            break;
        case 19:
            WScript.Echo(19);
            break;
        case 20:
            WScript.Echo(20);
            break;
        default:
            WScript.Echo('default');
            break;
    }
}

f(1,12);
f(2,13);
f(3,15);
f(8,16);
f(5,16);


for(i=0;i<2;i++)
{
    f(new Object,12);

}


for(i=0;i<2;i++)
{
    f(new Object,1.1);
    f(new Object,new Object);
}

