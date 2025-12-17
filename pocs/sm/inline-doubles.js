function add0_5 (n) {
    return n + 0.5;
}

function add1_0 (n) {
    return n + 1;
}

function add1_5 (n) {
    return n + 1.5;
}

function add2_0 (n) {
    return n + 2;
}

function sub2_0 (n) {
    return n - 2;
}


var num = 1.5;

function main () {
    for (var i = 0; i < 1000; i++) {
        print(add0_5(num), 2);
        print(add1_0(num), 2.5);
        print(add1_5(num), 3);
        print(add2_0(num), 3.5);
        print(sub2_0(num), -0.5);
    }
}
main();
