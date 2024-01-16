




function print(x) { WScript.Echo(x+'') }

print(this.Math);

try {
    print(Math.PI);
} catch (e) {
    print(e);
}

try {
    print(Math);
} catch (e) {
    print(e);
}

let Math = { PIE: "delicious" };

print(this.Math);
print(this.Math.PI);
print(this.Math.PIE);
print(Math);
print(Math.PI);
print(Math.PIE);

print(this.JSON);

try {
    print(JSON.stringify);
} catch (e) {
    print(e);
}

try {
    print(JSON);
} catch (e) {
    print(e);
}

const JSON = { stringifize: "no dice" };

print(this.JSON);
print(this.JSON.stringify);
print(this.JSON.stringifize);
print(JSON);
print(JSON.stringify);
print(JSON.stringifize);
