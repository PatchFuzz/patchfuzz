var obj = {A:1, B:2} 
function test2()
{
    return obj.A;
}
   
Object.defineProperty(obj, "D", {get: function() {return 5;}});

print(test2());
print(test2());
obj.A  =99;
print(test2());

