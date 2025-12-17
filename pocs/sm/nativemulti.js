var first = 0;
var second = 0;

function foreachweird(a, f, vfirst, vsecond)
{
  a.forEach(f);
  print(first, vfirst);
  print(second, vsecond);
}

function weird() {
  eval("first = 'one';");
  eval("second = 'two';");
}

foreachweird([0], function() {}, 0, 0);
foreachweird([0], function() {}, 0, 0);
foreachweird([0], weird, 'one', 'two');
