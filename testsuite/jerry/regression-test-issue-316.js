













try {
  v_1 = RegExp.prototype.test;
  v_1(ReferenceError);
}
catch (e)
{
  assert (e instanceof TypeError);
}

try {
  v_1 = RegExp.prototype.exec;
  v_1(ReferenceError);
}
catch (e)
{
  assert (e instanceof TypeError);
}

try {
  v_1 = RegExp.prototype.toString;
  v_1(ReferenceError);
}
catch (e)
{
  assert (e instanceof TypeError);
}
