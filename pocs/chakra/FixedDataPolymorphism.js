function test4()
{
    
    
   return obj.C + obj.F;
}

var obj = {D:5,F:2};
Object.prototype.C = 10;
print(test4());
obj.B = 5;
print(test4());



print(test4());
obj.C = 99;
print(test4());


