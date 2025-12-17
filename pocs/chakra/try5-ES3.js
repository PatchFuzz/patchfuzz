function write(args)
{
  print(args);
}

var scenario= 1;
function InitScenario()
{
  write("Scenario " + scenario++);
}

var e = "I am alive";

InitScenario(); 

try
{
  throw "abc";
}
catch(e)
{
  write(e);
}
write(e);

InitScenario();

try
{
  throw "abc";
}
catch(e)
{
  e = 20;
  write(e);
}
write(e);


InitScenario();

var a = new Object();
a.e = "I am inside with";

with(a)
{
 try
 { 
   throw "abc";
 }
 catch(e)
 {
   e = 20;
   write(e);
 }
 write(e);
}
write(e);



InitScenario();

try
{ 
  throw "abc";
}
catch(e)
{
  var a = new Object();
  a.e = "I am inside with";

  with(a)
  {
    write(e);
  }
  write(e);
}
write(e);




InitScenario();

try
{ 
  throw "abc";
}
catch(e)
{
  var a = 10;
}
write(a);


InitScenario();
try
{ 
  throw "abc";
}
catch(e)
{
  var a = function () { return "hello world";};
}
write(a());

InitScenario();
try
{ 
  throw "abc";
}
catch(e)
{
  eval("a = function () { return 'hello world';};");
}
write(a());

InitScenario();
try
{ 
  throw "abc";
}
catch(e)
{
  c = 30;
}
write(c);



InitScenario();

var foo = function ()
{

    try
    {
      throw "abc";
    }
    catch(e)
    {
      write(e);
    }
    write(e);
}
foo();

InitScenario();

foo = function ()
{
    try
    {
      throw "abc";
    }
    catch(e)
    {
      e = 20;
      write(e);
    }
    write(e);
}
foo();

InitScenario();

foo = function ()
{
    var a = new Object();
    a.e = "I am inside with";

    with(a)
    {
     try
     { 
       throw "abc";
     }
     catch(e)
     {
       e = 20;
       write(e);
     }
     write(e);
    }
    write(e);
}
foo();

InitScenario();

foo = function ()
{
    try
    { 
      throw "abc";
    }
    catch(e)
    {
      var a = new Object();
      a.e = "I am inside with";

      with(a)
      {
        write(e);
      }
      write(e);
    }
    write(e);
}

InitScenario();

foo = function ()
{
    try
    { 
      throw "abc";
    }
    catch(e)
    {
      var a = 10;
    }
    write(a);
}
foo();


InitScenario();
foo = function ()
{
    try
    { 
      throw "abc";
    }
    catch(e)
    {
      var a = function () { return "hello world";};
    }
    write(a());
}
foo();

InitScenario();
foo = function ()
{
    try
    { 
      throw "abc";
    }
    catch(e)
    {
      eval("a = function () { return 'hello world';};");
    }
    write(a());
}
foo();

InitScenario();
foo = function ()
{
    try
    { 
      throw "abc";
    }
    catch(e)
    {
      c = 30;
    }
    write(c);
}
foo();

InitScenario();
foo = function ()
{
  var test = 'pass';
  try {
    throw 'fail';
  } catch (test) {
    test += 'ing';
  }
  write(test);
}
foo();



InitScenario();
try
{ 
  throw "abc";
}
catch(e)
{
  eval("a = 10;");
}
write(a);


InitScenario();
foo = function ()
{
    try
    { 
      throw "abc";
    }
    catch(e)
    {
      eval("a = 19;");
    }
    write(a);
}
foo();


