var x = "d";
function foo()
{
    var s = unescape(x);
    if(s!='')
    {
        switch(s){
        case '0':
            print(0);
            break;
        case '1':
            print(1);
            break;
        case '2':
            print(2);
            break;
        case '3':
            print(3);
            break;
        default:
            break;
        }
    }
}
foo();
foo();
foo();
print("passed");
