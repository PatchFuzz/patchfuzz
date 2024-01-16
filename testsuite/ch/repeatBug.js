




try
{
    var str = "+".repeat(0x80000000);
    str = str.replace(str, "+");

  	WScript.Echo("FAIL: Was expecting Out of Memory exception.");
}
catch (e)
{
  if(e.number == -2146828281) 
    WScript.Echo("PASS");
  else
    WScript.Echo("FAIL: Got the wrong exception code.");
}


