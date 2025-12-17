try
{
    var str = "+".repeat(0x80000000);
    str = str.replace(str, "+");

  	print("FAIL: Was expecting Out of Memory exception.");
}
catch (e)
{
  if(e.number == -2146828281) 
    print("PASS");
  else
    print("FAIL: Got the wrong exception code.");
}


