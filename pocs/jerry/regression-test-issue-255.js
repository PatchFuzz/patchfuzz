v_0 = /(?!(?!l{666,}))/;

try
{
  v_0.exec("llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll");
}
catch (e)
{
  assert (e instanceof RangeError);
  assert (e.message === "RegExp executor steps limit is exceeded.");
}
