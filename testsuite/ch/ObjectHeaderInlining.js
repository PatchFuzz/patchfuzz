





function TwoProperty(p, q) {
    this.p = p;
    this.q = q;
}

function OneProperty(x){
    this.x = x;
}


function CreateTwoPropertyObj()
{
    var a = new TwoProperty(2, 3);
    return a;
}

function CreateOnePropertyObj()
{
    var a = new OneProperty(4)
    return a;
}


function grow(a, r, s)
{
    a.r = r;
    a.s = s;
}
 
var obj;
var obj1;

for(i = 0; i < 5; i++)
{
    obj = CreateTwoPropertyObj();
    obj1 = CreateOnePropertyObj();
}



grow(obj, 10, 20);

obj = CreateTwoPropertyObj();
grow(obj, 10, 20);

obj = CreateTwoPropertyObj();
grow(obj, 10, 20);

WScript.Echo(obj.p);
WScript.Echo(obj.q);
WScript.Echo(obj.r);
WScript.Echo(obj.s);
WScript.Echo(obj1.x);
    
 
