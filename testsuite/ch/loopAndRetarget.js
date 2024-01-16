






function f(x)
{
    
    switch(x)
    {
        case 'abc':
            break;
        case 'stu':
            break;
        default:
            WScript.Echo('Default cases');
            break;
    }

    
    for(i = 0; i < 2; i++)
    {
        switch(x)
        {
            case 'abc':
                WScript.Echo('abc');
                break;
            case 'def':
                break;
            default:
                WScript.Echo('default');
                break;
        }
    }
}

f('stu');
f('stu');
f('vxy');
f('z');
f('x');
f('abc');
f('def');
f('ghi');
f('jkl');
f('mno');
f('pqr');
f('saf');
