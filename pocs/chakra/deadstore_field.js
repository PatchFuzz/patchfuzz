function func()
{
    print(i);
}

var i;
i = 0; 
i = 1;
print(i);

i = 0;  
func();
i = 1;
print(i);

i = 0;  
var obj = this;
var j = obj.i;
obj.i = -1;
i = 1;  
print(i);
