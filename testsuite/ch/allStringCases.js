





function f(x,y)
{
    switch(x)
    {
        case 'abc':
           WScript.Echo('abc');
           break;
        case 'def':
            WScript.Echo('def');
           break;
        case 'ghi':
            WScript.Echo('ghi');
            break;
        case 'jkl':
            WScript.Echo('jkl');
            break;
        case 'mno':
            WScript.Echo('mno');
            break;
        case 'pqr':
            WScript.Echo('pqr');
            break;
        case 'stu':
            WScript.Echo('stu');
            break;
        case 'vxy':
            WScript.Echo('vxy');
            break;
        case 'z':
            WScript.Echo('z');
            break;
        default:
            WScript.Echo('default');
            break;
    }

    
    switch(y)
    {
        case 'abc':
            WScript.Echo('abc');
            break;
    }

}

f('abc','abc');
f('def','def');
f('ghi','ghi');
f('jkl','jkl');
f('mno','mno');
f('pqr','pqr');
f('stu','stu');
f('vxy','vxy');
f('z','z');
f('saf','asf');

