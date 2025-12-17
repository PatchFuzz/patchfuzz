function myObject()
{
    this.A = 1
} 

myObject.prototype = {C:10};
Object.defineProperty(myObject.prototype, "B", {
    enumerable   : false,
    configurable : true,
    writable     : true, 
    value        : 20
}); 


var child = new myObject();

function test1()
{
    return child.B;
}

print(test1());
print(test1());
child.B = 99;
print(test1());


function myObject()
{
    this.A = 1,
    this.C = 10
    
 }; 
 
myObject.prototype = {B:10}
Object.defineProperty(myObject.prototype, "D", {get: function() {return 5;}});

function test2()
{
    return child.B;
}
   
var child = new myObject(); 

print(test2());
print(test2());

child.B =99;
print(test2());

