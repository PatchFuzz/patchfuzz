var TEST = function(a, b) {
  if (a != b) {
    throw new Error(a + " != " + b);
  }
}

var obj = { str:6 };
obj[0] = 'value0'
obj[6] = 'value6';
TEST(JSON.stringify(obj, function(k, v) {
  if (!k) return v;
  return v + 1
}), '{"0":"value01","6":"value61","str":7}');


TEST(JSON.stringify({0:0, 1:1, "two":2}), '{"0":0,"1":1,"two":2}')

var a = new Object();

function replacer(k, v)
{
    return v;
}

var until = ("zxw" == 'Debug') ? 12 : 1290;
for (var i = 0; i < until; i++)
{
    a[i + 10] = 0;
}

TEST(JSON.stringify(a, replacer).substring(0,20), '{"10":0,"11":0,"12":');

print("PASS")
