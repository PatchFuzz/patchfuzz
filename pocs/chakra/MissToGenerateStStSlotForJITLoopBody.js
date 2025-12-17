function test0(i)
{
    try{
        for (var j = 0; j < 20010; j++) {
            if (j > 20000)
                return 'j ' + i + ' j in the loop ' + i;
            else if (j > 30000)
                return ' test0 ' + j;
        }
    } catch(e){}
}

var ret = test0() + ' test StSlot generation';

print('pass');
