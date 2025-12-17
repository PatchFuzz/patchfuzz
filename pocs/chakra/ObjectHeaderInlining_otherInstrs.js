function test0()
{
    this.a = 1;
    this.b = 2;
    return undefined;
}


var obj = new test0();
obj = new test0();
obj = new test0();
obj = new test0();
obj = new test0();

print(obj.a);
print(obj.b);

obj.a = 10; 
obj.b = 20; 


print(obj.a);
print(obj.b);