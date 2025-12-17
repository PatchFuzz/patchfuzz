var actual = '';

var a = [0, 1];
for (var i in a) {
    print(i);
    delete a[1];
}

print(actual, "0,");
