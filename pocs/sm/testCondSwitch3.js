var C1 = 1;

function f(x) {
    var s = "";

    switch(x) {
    case 0:
        s += "0";
    case C1:
        s += "1";
    }
    return s;
}

print(f(0), "01");
print(f(1), "1");
print(f(2), "");

print(f(true), "");
print(f(Math), "");

