{
  function a(){}
  function b(){}
  function c(){}
  function d(){}
  function e(){}
  function f(){}
  function g(){}
  function h(){}
}

var names = Object.getOwnPropertyNames(this);
names = names.filter(n => Array.prototype.includes.call("abcdefgh", n));
print("a,b,c,d,e,f,g,h", names.join());

{
  {
    let j;
    {
      
      function j(){}
    }
  }
  function i(){}

  
  function j(){}
}

var names = Object.getOwnPropertyNames(this);
names = names.filter(n => Array.prototype.includes.call("ij", n));
print("i,j", names.join());
