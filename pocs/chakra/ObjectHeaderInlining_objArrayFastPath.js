function AccessObjArray(obj)
{
    print(obj[0]);
}

function TwoProp(a,b)
{
    this.a = a;
    this.b = b;
}


var obj1 = new TwoProp({}, ["1",2,3]);

var obj2 = new Object();
obj2[0] = 10;

AccessObjArray(obj2);
AccessObjArray(obj2);
AccessObjArray(obj2);

AccessObjArray(obj1);