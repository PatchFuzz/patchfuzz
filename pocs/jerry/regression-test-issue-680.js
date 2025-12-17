try
{
  f1(function(a1){});
  assert (false);
}
catch (e)
{
  assert (e instanceof ReferenceError);
}

var x = {
foo: function () { throw new TypeError("bar"); }
};
