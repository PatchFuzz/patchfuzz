





function test0(a)
{
    switch(a)
    {
        case 14:
            WScript.Echo('14');
            break;
        case 15:
            WScript.Echo('16');
            break;
        case 1:
            WScript.Echo('1');
            break;
        default:
            WScript.Echo('default');
            break;
    }
}

test0(1);
test0(14);
