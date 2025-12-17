var x = 13;

function ReturnArray() {
    return Array;
}
function ReturnObject() {
    return Object;
}
function ReturnX() {
    return x;
}

y = null;
function ReturnY() {
    return y;
}
z = "3";
z = null;
function ReturnZ() {
    return z;
}

for (var i = 0; i < 100; i++)
    ReturnArray();
for (var i = 0; i < 100; i++)
    ReturnX();
for (var i = 0; i < 100; i++)
    ReturnZ();

gc();

print(ReturnArray(), Array);
print(ReturnObject(), Object);
print(ReturnX(), 13);
print(ReturnY(), null);
print(ReturnZ(), null);

