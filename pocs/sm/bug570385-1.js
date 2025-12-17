var actual = '';

var a = [0, 1];
for (var i in a) {
    print(i);
    a.pop();
}

print(actual, "0,");
