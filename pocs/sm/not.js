function t1(v)
{
  if (!v)
    return 1;
  return 0;
}

print(t1(createIsHTMLDDA()), 1);
print(t1(createIsHTMLDDA()), 1);
print(t1(createIsHTMLDDA()), 1);

function t2(v)
{
  if (!v)
    return 1;
  return 0;
}

print(t2(17), 0);
print(t2(0), 1);
print(t2(-0), 1);
print(t2(createIsHTMLDDA()), 1);
print(t2(createIsHTMLDDA()), 1);
print(t2(createIsHTMLDDA()), 1);
