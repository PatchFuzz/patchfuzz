function test1(re, test) {
    return re.test(test);
}

print(true, test1(/undefined/, undefined));
print(true, test1(/undefined/, undefined));

function test2(re, test) {
    return re.test(test);
}

print(true, test2(/null/, null));
print(true, test2(/null/, null));

function test3(re, test) {
    return re.test(test);
}

print(true, test3(/0/, 0));
print(true, test3(/0/, 0));

function test4(re, test) {
    return re.test(test);
}

print(true, test4(/12.12/, 12.12));
print(true, test4(/12.12/, 12.12));

function test5(re, test) {
    return re.test(test);
}

print(true, test5(/true/, true));
print(true, test5(/false/, false));
print(true, test5(/true/, true));
print(true, test5(/false/, false));

function test6(re, test) {
    return re.test(test);
}

print(true, test6(/object/, {}));
print(true, test6(/object/, {}));

print(true, test1(/test/, "test"));
print(true, test1(/test/, "test"));
print(true, test1(/undefined/, undefined));
print(true, test1(/undefined/, undefined));
print(true, test1(/null/, null));
print(true, test1(/null/, null));
print(true, test1(/0.1/, 0.1));
print(true, test1(/0.1/, 0.1));
print(true, test1(/20000/, 20000));
print(true, test1(/20000/, 20000));
print(true, test1(/object/, {}));
print(true, test1(/object/, {}));


