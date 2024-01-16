













try
{
  v_0 = new RegExp("N(?![^6](?:.)|(?!C[^k-o]*|p){0,}|H)|\\\\xDF\\db{0,}|i\\\\0?)");
  assert (false);
}
catch (e)
{
  assert (e instanceof SyntaxError);
}
