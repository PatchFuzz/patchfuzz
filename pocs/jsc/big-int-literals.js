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


let n = 0n;
print(n === 0n);



n = 0b1111n;
print(n === 15n);

n = 0b10n;
print(n === 2n);

n = 0b010n;
print(n === 2n);

let binaryString = "0b1";
for (let i = 0; i < 128; i++)
    binaryString += "0";

n = eval(binaryString + "n");
print(n === 340282366920938463463374607431768211456n);

n = 0B1111n;
print(n === 15n);

n = 0B10n;
print(n === 2n);

binaryString = "0B1";
for (let i = 0; i < 128; i++)
    binaryString += "0";

n = eval(binaryString + "n");
print(n === 340282366920938463463374607431768211456n);



n = 0o7n;
print(n === 7n);

n = 0o10n;
print(n === 8n);

n = 0o20n;
print(n === 16n);

n = 0o00020n;
print(n === 16n);

n = 0O7n;
print(n === 7n);

n = 0O10n;
print(n === 8n);

n = 0O20n;
print(n === 16n);

n = 0O20n;
print(n === 16n);



n = 0xan;
print(n === 10n);

n = 0xffn;
print(n === 255n);

n = 0x000ffn;
print(n === 255n);

n = 0xfabcn;
print(n === 64188n);

print("0b2n");
print("0b02n");
print("0b1nn");
print("0o89n");
print("0o08n");
print("0o7nn");
print("0xgn");
print("0x0gn");
print("0xfnn");
print("100nn");
print("1a0nn");
print("10E20n");
print("--10n");
print("00n");
print("01n");
print("09n");
