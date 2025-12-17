if (undefined == null)
    print("Algorithm says equivalent");
else
    print("Objects are not equivalent");





if (undefined === null)
    print("Same instance");
else
    print("Different instances");

if (undefined === undefined)
    print("Same instance");
else
    print("Different instances");

if (null === null)
    print("Same instance");
else
    print("Different instances");

function dump(a, index)
{
    var value = a[index];
    if (value === undefined)
    {
        print("'undefined'");
    }
    else if (value === null)
    {
        print("'null'");
    }
    else
    {
        print(value);
    }
}





var a = new Array(2);

dump(a, 0);
dump(a, 1);

dump(a, 10);
a[10] = 'A';
dump(a, 10);

dump(a, 5);
