function testProperty(i)
{
  actual = obj[String(i)];
}

var obj = {};
var index = [null, 1073741824, 1073741825];
for (var j in index)
  testProperty(index[j]);
