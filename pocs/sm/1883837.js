let threw = false;
try {
    ({
        a: arguments.length
    } = 0);
} catch (error) {
    print(error instanceof ReferenceError, true);
    threw = true;
}
print(threw, true);
