function foo()
{
  this.a = 5;
  this.b = 2;
}
foo.prototype.add = function(x,y) 
{
  return x+y;
}
