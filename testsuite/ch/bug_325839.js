









function foo()
{
  WScript.Echo("foo"); 
}

function test_objectNoArg()
{
  new foo();
  var y = 1;	
}

var oldArray = Array;
function MyArray()
{
  WScript.Echo("MyArray"); 
  return oldArray.apply(this, arguments);
}

function test_arrayNoArg()
{
  Array = MyArray;
  new Array();
  Array = oldArray;
  var y = 1;	
}

test_objectNoArg();
test_arrayNoArg();
