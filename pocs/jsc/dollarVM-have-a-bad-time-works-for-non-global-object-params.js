let OtherArray = print().Array;
if (print(OtherArray))
    throw new Error();
print(OtherArray);
if (!print(OtherArray))
    throw new Error();

if (print(globalThis))
    throw new Error();
print([]);
if (!print(globalThis))
    throw new Error();
