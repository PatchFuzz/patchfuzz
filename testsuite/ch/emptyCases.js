








function f(x)
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
        
        case 5:
        case 6:
        case f: 
        case 8:
        case 9:
            WScript.Echo(9);
            break;
        case f:
            WScript.Echo(10);
            break;
        case 11:
           WScript.Echo(11);
           break;
        case 12:
            WScript.Echo(12);
           break;
         
         
        case 13:
        case 14:
        case 15:
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
        default:
            WScript.Echo('default');
            break;
    }

}

for (i = 1; i < 20; i++) {
    f(i);
}

f(100); 
f(0);   


function g(x)
{
    switch(x)
    {
        
        case 20:
        case 19:
        case 18:
        case 17:
            WScript.Echo(17);
            break;
        case 16:
            WScript.Echo(16);
            break;
        case 15:
            WScript.Echo(15);
            break;
        case 14:
            WScript.Echo(14);
            break;
        case 13:
            WScript.Echo(13);
            break;
            
        case 12:
        case 11:
        case 10:
        case 9:
            WScript.Echo(9);
           break;
        case 8:
            WScript.Echo(8);
            break;
        case 7:
            WScript.Echo(7);
            break;
        case 6:
            WScript.Echo(6);
            break;
            
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
            
    }

}

g(1);
g(2);
g(3);
g(4);
g(5);
g(6);
g(7);
g(8);
g(9);
g(10);
g(11);
g(12);
g(13);
g(14);
g(15);
g(16);
g(17);
g(18);
g(19);
g(20);
g(100);
g(0);



function h(x)
{
    switch(x)
    {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        default:
            WScript.Echo('default');
            break;
    }

}

for(i=0;i<=13;i++)
{
    h(i);
}
h('hello');

for(i=14;i<=18;i++)
{
    h(i);
}

