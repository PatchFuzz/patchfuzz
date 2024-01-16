



{
  try
  {
    try
    {
    }
    catch(ex1)
    {
    }
  }
  catch(ex)
  {
  }
}
function optionsClear() {
  var optionNames = options().split(',');
  for (var i = 0; i < optionNames.length; i++)
  {
    var optionName = optionNames[i];
    if (optionName &&
        optionName != "methodjit_always")
    {
      options(optionName);
    }
  }
}
{
  optionsClear();
  {
  }
}
function test() {
  for ( gTc=0; gTc < gTestcases.length; gTc++ ) {
    try
    {
    }
    catch(e)
    {
    }
  }
}
try {
var g = newGlobal();
g.eval("(" + function () {
        dbg = new Debugger(debuggeeGlobal);
    } + ")();");
} catch(exc0) {}
