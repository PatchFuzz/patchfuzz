













var name = "";

try
{
  Int16Array.from();
}
catch (e)
{
  name = e.name;
}

assert(name === "TypeError");

Int16Array.of();
