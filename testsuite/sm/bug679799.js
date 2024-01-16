



function test()
{
  var x = { "0": 3, "-0": 7 };
  try {
    delete x["-0"];
    if ("-0" in x)
      throw "0 not in x after insertion of 0 property";
    this ["-0"] = 7;
  } catch(ex) {}
}
test();
test();
