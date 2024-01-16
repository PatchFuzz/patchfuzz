






function f(x)
{
    
    switch(x)
    {
        case 'abc':
        case 'def':
        case 'ghi':
            WScript.Echo('empty Cases');
            break;
        case 'stu':
            WScript.Echo('stu');
            break;
        default:
            WScript.Echo('Default cases');
            break;
    }

    
    switch(x)
    {
        case 'abc':
        case 'abc':
        case 'abc':
            WScript.Echo('abc');
            break;
        case 'def':
            WScript.Echo('first def');
            break;
        case 'def':
            WScript.Echo('second def');
            break;
        default:
            WScript.Echo('default');
            break;
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
