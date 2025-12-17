print("../UnitTestFramework/known_globals.js");

for (a in this) {
    if (isKnownGlobal(a))
        continue;
    print(a);
}


const x = 10;
print(x);
{
    const x = 20;
    print(x);
}
print(x);



for (a in this) {
    if (isKnownGlobal(a))
        continue;
    print(a);
}

