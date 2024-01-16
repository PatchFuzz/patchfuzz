
function TestCase(a) { }


function reportCompare (actual) {
  TestCase(actual);
  try   {  }  catch(ex)  {  }
}


function addThis(bound) {
    actualvalues[bound] = undefined + actual;
    reportCompare(actualvalues[bound]);
}

var actual = '';
var actualvalues = [];
addThis(0);
actual = NaN;
addThis(1);
