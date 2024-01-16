













try
{
  for (v_0 in v_1) {};
  f_0(v_2.v_3 === 5);
  assert (false);
}
catch (e)
{
  assert (e instanceof ReferenceError);
}
