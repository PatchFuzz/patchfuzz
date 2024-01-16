













var name = "";

try
{
    Promise.race([""]).$()
}
catch (e)
{
    name = e.name;
}

assert(name === "TypeError");
