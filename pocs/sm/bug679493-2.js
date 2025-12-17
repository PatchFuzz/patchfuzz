function neg(x) {
    return -x;
}
print(neg(0), -0);
print(neg(1), -1);
print(neg(-1), 1);
print(neg(-2147483648), 2147483648);
print(neg(-1.3), 1.3);
print(neg(1.45), -1.45);


function neg2(){
    var x = 1;
    var y = -x;
    return y;
}
print(neg2(), -1);
function neg3(){
    var x = 0;
    var y = -x;
    return y;
}
print(neg3(), -0);
function neg4(){
    var x = -2147483648;
    var y = -x;
    return y;
}
print(neg4(), 2147483648);
