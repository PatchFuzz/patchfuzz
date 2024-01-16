













function dummy ()
{
  "D" + "a";
}

var p1Handler = { getOwnPropertyDescriptor: dummy };
var p1 = new Proxy({}, p1Handler);

function dummyString ()
{
  return "a";
}

var p2Handler = { deleteProperty: dummyString };
var p2 = new Proxy(p1, p2Handler);

var result = (delete p2[1]);

assert (result);
