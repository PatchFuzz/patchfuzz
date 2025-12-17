var a = 1;
with ({a: 2}) {
    a++;
    eval("a=100;");
    print(a);
    print('PASSED'); 
}
print(a);