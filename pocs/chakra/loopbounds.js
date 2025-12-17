print("relational");
j = 0;
for(var i = 0x1ffffffc; i < 0x20000003; ++i)
{
    print(++j);
}
j = 0;
for(var i = -0x20000003; i < -0x1ffffffc; ++i)
{
    print(++j);
}


print("equality");
j = 0;
for(var i = 0x1ffffffc; i != 0x20000003; ++i)
{
    print(++j);
}
j = 0;
for(var i = -0x20000003; i != -0x1ffffffc; ++i)
{
    print(++j);
}
