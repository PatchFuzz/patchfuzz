













var literal = "a"

for (var i = 0; i < 25; i++)
  literal += "\\u0061bcdefghij"

assert(eval("var " + literal + " = 42; " + literal) === 42)

literal = undefined

var str = ""
var expected = ""

for (var i = 0; i < 1000; i++)
{
  str += "123456789\\n"
  expected += "123456789\n"
}

assert(eval('"' + str + '"') === expected);

