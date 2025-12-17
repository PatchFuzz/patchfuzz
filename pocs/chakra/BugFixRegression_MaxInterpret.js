function test0(a) {
    var b = -1;
    switch(a ? a * 1 : a * 0.1) {
        case 0:
            b = 0;
            break;
        case 1:
            b = 1;
            break;
        case 2:
            b = 2;
            break;
        case 3:
            b = 3;
    }
    return b;
}
test0(1);
test0(0);



function test1(a, b) {
    ++b;
    switch(a) {
        case "0":
            b += 0.1;
            break;
        case "1":
        case "2":
        case "3":
    }
    return b;
}
test1("1", 0);
test1("1", 0);

print("pass");
