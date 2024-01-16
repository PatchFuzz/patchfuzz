

var items = [
  [TypeError, "TypeError"],
  [SyntaxError, "SyntaxError"],
  [URIError, "URIError"],
  [EvalError, "EvalError"],
  [RangeError, "RangeError"],
  [ReferenceError, "ReferenceError"],
];

for (var idx = 0; idx < items.length; idx++) {
  var type = items[idx][0];
  var expected_name = items[idx][1];
  assert (type.name === expected_name);

  assert ((new type).name === expected_name);
}

assert (AggregateError.name === "AggregateError");
assert (new AggregateError([]).name === "AggregateError")

try
{
  new AggregateError.name === "TypeError";
}
catch(e)
{
  assert (e instanceof TypeError)
}
