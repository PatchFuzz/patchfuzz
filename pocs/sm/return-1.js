var f = a => {
    if (a)
        return a + 1;
    throw "FAIL";
};

print(f(1), 2);
