













var obj = { "arguments": "foo" }

function testcase ()
{
  return obj.hasOwnProperty ("arguments");
}

assert (testcase () === true);
