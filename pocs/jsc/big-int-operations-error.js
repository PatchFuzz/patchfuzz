function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

function print(input) {
    try {
        eval(input);
        print(false);
    } catch (e) {
        print(e instanceof TypeError);
    }
}

print("a" + 100n, "a100");
print(128n + "baba", "128baba");

print("10n + 30");
print("36 + 15n");
print("120n + 30.5");
print("44.5 + 112034n");

print("10n - 30");
print("36 - 15n");
print("120n - 30.5");
print("44.5 - 112034n");

print("10n * 30");
print("36 * 15n");
print("120n * 30.5");
print("44.5 * 112034n");

print("10n / 30");
print("36 / 15n");
print("120n / 30.5");
print("44.5 / 112034n");

print("10n ** 30");
print("36 ** 15n");
print("120n ** 30.5");
print("44.5 ** 112034n");

