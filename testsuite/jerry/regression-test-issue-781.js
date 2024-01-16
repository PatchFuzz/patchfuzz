













try
{
  Function (Array.isArray);
  assert (false);
}
catch (e)
{ 
  assert (e instanceof SyntaxError);
}

try { Function(TypeError.prototype) } catch (err) { }
