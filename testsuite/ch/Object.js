




function write(value) {
  WScript.Echo(value);
}

function RunTest(testCase, testCount) {
  var testFunction = testCase[0];
  var testScenario = testCase[1];

  testScenario = " (test " + testCount + "): " + testScenario;
    
  write(testScenario);
  try {
    var result = testFunction();
    if (result == true) {
        write("PASS");
    }
  } catch (e) {
    var resultString = "FAILED" + testScenario;
    write(resultString + " :: " + e.message);
  }  
}

function RunAllTests(){  
  for(var i = 0; i < testList.length; ++i){
    RunTest(testList[i], i + 1);
  }
}

var testList = [
    [Test1, "Object getOwnPropertyDescriptor throws TypeError when the first parameter is either null or undefined"],
    [Test2, "Freezing an object with deleted properties"],
    [Test3, "Object getOwnPropertyDescriptor works fine when the first parameter is a built-in type except null or undefined"],
];


function Verify(expression, expectedValue, actualValue) {
  if (expectedValue != actualValue) {
    write("Failed: Expected " + expression + " = " + expectedValue + ", got " + actualValue);
    return false;
  }
  write("Success: Expected " + expression + " = " + expectedValue + ", got " + actualValue);
  return true;
}




function Test1() {
   var exception;

   exception = null;
   try    {
     eval("Object.getOwnPropertyDescriptor(null, 'foo', {})");
   } catch (ex) {
     exception = ex;
   }
   if(!Verify("Object getOwnPropertyDescriptor throws TypeError when 1st parameter is null", true, exception instanceof TypeError)) return false;

   exception = null;
   try {
     eval("Object.getOwnPropertyDescriptor(undefined, 'foo', {})");
   } catch (ex) {
     exception = ex;
   }
   if(!Verify("Object getOwnPropertyDescriptor throws TypeError when 1st parameter is undefined", true, exception instanceof TypeError)) return false;

   return true;
}


function Test2()
{
    var x = {};
    x.c = 1;
    delete x.c;
    Object.freeze(x);
    return true;
}

function Test3()
{
    if (!Verify("Object getOwnPropertyDescriptor does not throw when 1st parameter is boolean", undefined, Object.getOwnPropertyDescriptor(true, 'foo'))) return false;
    if (!Verify("Object getOwnPropertyDescriptor does not throw when 1st parameter is number", undefined, Object.getOwnPropertyDescriptor(123, 'foo'))) return false;
    if (!Verify("Object getOwnPropertyDescriptor works fine when 1st parameter is string", 3, Object.getOwnPropertyDescriptor('foo', 'length').value)) return false;

    return true;
}

RunAllTests();
