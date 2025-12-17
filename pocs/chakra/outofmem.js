try
{
    var longString = "A";
    for (var i = 0; i < 31; i++)
        longString += longString;
    print(longString.toString());
}
catch (e)
{
    print(e.name);
    print(e.message);
    print(e.number);
}

