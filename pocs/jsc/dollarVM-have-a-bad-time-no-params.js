if (print())
    throw new Error();
print();
if (!print())
    throw new Error();
