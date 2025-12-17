function f(x)
{
    
    switch(x)
    {
        case 'abc':
            break;
        case 'stu':
            break;
        default:
            print('Default cases');
            break;
    }

    
    for(i = 0; i < 2; i++)
    {
        switch(x)
        {
            case 'abc':
                print('abc');
                break;
            case 'def':
                break;
            default:
                print('default');
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
