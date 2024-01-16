function ceil(x) {
    return Math.ceil(x);
}


assertEq(ceil(1.1), 2);
assertEq(ceil(-1.1), -1);
assertEq(ceil(-3), -3);



assertEq(ceil(0), 0);
assertEq(ceil(0), 0);


assertEq(ceil(1.1), 2);
assertEq(ceil(-1.1), -1);
assertEq(ceil(-3), -3);


assertEq(ceil(-0), -0);
assertEq(ceil(Math.pow(2, 32)), Math.pow(2, 32));
assertEq(ceil(-0), -0);


assertEq(ceil(1.5), 2);
