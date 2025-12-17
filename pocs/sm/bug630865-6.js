var a = [];
var x, i;
for (i = 0; i < 18; i++) {
    a[i] = function (b) { this.b = b; };
    if (i != 17)
        x = a[i].prototype;
}
for (i = 0; i < 18; i++)
    x = new a[i];
print(toString.call(x), "[object Object]");
print(Object.getPrototypeOf(x), a[17].prototype);
