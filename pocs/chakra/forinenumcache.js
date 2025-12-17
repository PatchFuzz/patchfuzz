function createObject()
{
    var obj = new Object();
    obj.a = 1;
    obj.b = 2;
    obj.c = 3;
    obj.d = 4;
    return obj;
}

function createObject2()
{
    var obj = new Object();
    obj.e = 1;
    obj.b = 2;
    obj.c = 3;
    obj.d = 4;
    return obj;
}

var testnumber = 1;

print("test " + testnumber++);
var obj = createObject();
for (var i in obj)
{
    print(i + " = " + obj[i]);
}


print("test " + testnumber++);
var obj = createObject();
for (var i in obj)
{
    print(i + " = " + obj[i]);
}


print("test " + testnumber++);
var c = 0;
var obj = createObject();
for (var i in obj)
{
    c++;
    print(i + " = " + obj[i]);
    if (c == 2)
    {
        delete obj.d;
    }
}


print("test " + testnumber++);
var c = 0;
var obj = createObject();
for (var i in obj)
{
    c++;
    print(i + " = " + obj[i]);
    if (c == 2)
    {
        delete obj.d;
    }
    else if (c == 3)
    {
        obj.d = 5;
    }
}


print("test " + testnumber++);
var obj = createObject2();

for (var i in obj)
{
    var c = 0;
    for (var j in obj)
    {
        print(i + "," + j);
        if (c == 1)
        {   
            break;
        }
        if (i == j)
        {
            c = 1;
        }
        
    }
}
