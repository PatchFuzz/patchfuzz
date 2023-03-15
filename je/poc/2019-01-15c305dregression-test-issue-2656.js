













var obj = { "arguments": "foo" }

function testcase ()
{
  return obj.hasOwnProperty ("arguments");
}

print(testcase () === true);
