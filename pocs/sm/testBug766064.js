function loop(actual = 0)  {
  if (function() { actual++ })
  {}
  return actual;
}

print(loop(), 0);
