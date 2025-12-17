function t1(v)
{
  if (v)
    return 1;
  return 0;
}

print(t1(createIsHTMLDDA()), 0);
print(t1(createIsHTMLDDA()), 0);
print(t1(createIsHTMLDDA()), 0);

function t2(v)
{
  if (v)
    return 1;
  return 0;
}

print(t2(17), 1);
print(t2(0), 0);
print(t2(-0), 0);
print(t2(createIsHTMLDDA()), 0);
print(t2(createIsHTMLDDA()), 0);
print(t2(createIsHTMLDDA()), 0);
