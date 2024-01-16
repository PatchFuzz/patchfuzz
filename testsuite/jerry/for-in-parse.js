













function parse (txt) {
  try {
    eval (txt)
    assert (false)
  } catch (e) {
    assert (e instanceof SyntaxError)
  }
}

var obj = {a: 1, b: 2, c:3, d:4};

var forIn =
  "for var prop in obj" +
  "   obj [prop] += 4"
parse (forIn)

var forIn =
  "for [var prop in obj]" +
  "   obj[prop] += 4;"
parse (forIn)

var forIn =
  "for (var prop obj)" +
  "   obj[prop] += 4;"
parse (forIn)

var forIn =
  "foreach (var prop in obj)" +
  "   obj[prop] += 4;"
parse (forIn)
