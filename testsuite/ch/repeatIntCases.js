








function f(x)
{

    switch(x)
    {
        case 1:

        case 2:

        case 2:

        case 4:

        case 4:
            WScript.Echo(5);
            break;
        case 4:
            WScript.Echo(6);
            break;
        case 6:
            WScript.Echo(7);
            break;
        case 8:
            WScript.Echo(8);
            break;
        case 9:
            WScript.Echo(9);
            break;
        case 10:
            WScript.Echo(10);
            break;

        default:
            WScript.Echo('default');
            break;
    }

}

f(1);

for(i=1; i <= 10; i++)
{
    f(i);
}

