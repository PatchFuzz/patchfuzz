var A = class {
    constructor () { }
}

for (var i=0; i<4; i++)
{
    (()=>new A())();
}

print("pass");
