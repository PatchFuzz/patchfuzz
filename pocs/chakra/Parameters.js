function dump(a)
{
    if (a == null)
    {
        print("'null'");
    }
    else if (a == undefined)
    {
        print("'undefined'");
    }
    else
    {
        print(a);
    }
}


function f1(a, b)
{
    

    dump("f1(a, b)");
    dump(a);
    dump(b);
}



f1(1, 2);


f1(1, 2, 3, 4);


f1(1);
