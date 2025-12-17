function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

function print(input) {
    try {
        eval(input);
        print(false);
    } catch (e) {
        print(e instanceof SyntaxError);
    }
}

var d;

print(eval("d=\u000C5n") === 5n);
print(d === 5n);

print(eval("d=\u000915n") === 15n);
print(d === 15n);

print(eval("d=\u000B19n\u000B;") === 19n);
print(d === 19n);

print(eval("d=\u000C119n;") === 119n);
print(d === 119n);

print(eval("d=\u002095n;") === 95n);
print(d === 95n);

print(eval("d=\u00A053n;") === 53n);
print(d === 53n);

print(eval("d=\uFEFF39n;") === 39n);
print(d === 39n);

print(eval("d=5n\u000C") === 5n);
print(d === 5n);

print(eval("d=15n\u0009") === 15n);
print(d === 15n);

print(eval("d=19n\u000B;") === 19n);
print(d === 19n);

print(eval("d=119n\u000C;") === 119n);
print(d === 119n);

print(eval("d=95n\u0020;") === 95n);
print(d === 95n);

print(eval("d=53n\u00A0;") === 53n);
print(d === 53n);

print(eval("d=39n\uFEFF;") === 39n);
print(d === 39n);

print(eval("\u000C\u000Cd\u000C\u000C=\u000C\u000C5n\u000C;\u000C") === 5n);
print(d === 5n);

print(eval("\u0009\u0009d\u0009\u0009=\u0009\u000915n\u0009;") === 15n);
print(d === 15n);

print(eval("\u000B\u000Bd\u000B\u000B=\u000B\u000B19n\u000B;") === 19n);
print(d === 19n);

print(eval("\u000C\u000Cd\u000C=\u000C\u000C119n;") === 119n);
print(d === 119n);

print(eval("\u0020d\u0020=\u0020\u002095n;") === 95n);
print(d === 95n);

print(eval("\u00A0d\u00A0=\u00A0\u00A053n;") === 53n);
print(d === 53n);

print(eval("\uFEFFd\uFEFF=\uFEFF\uFEFF39n;") === 39n);
print(d === 39n);



print("0b\u000C2n");
print("0b\u000B1101n");
print("0b\u0009111111n");
print("0b\u002010101n");
print("0b\u00A01011n");
print("0b\uFEFF111000n");

print("0o\u000C2n");
print("0o\u000B45n");
print("0o\u000977n");
print("0o\u0020777n");
print("0o\u00A01777n");
print("0o\uFEFF17361n");

print("0x\u000C2n");
print("0x\u000B45n");
print("0x\u000977n");
print("0x\u0020777n");
print("0x\u00A01777n");
print("0x\uFEFF17361n");

print("2\u000Cn");
print("45\u000Bn");
print("77\u0009n");
print("777\u0020n");
print("1777\u00A0n");
print("17361\uFEFFn");

