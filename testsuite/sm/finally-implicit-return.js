



function test1() {
    try {
        try {
            return 3;
        } finally {
            throw 4;
        }
    } catch (e) {}
}
assertEq(test1(), undefined);

function test2() {
    L: try {
        return 3;
    } finally {
        break L;
    }
}
assertEq(test2(), undefined);

function test3() {
    for (var i=0; i<2; i++) {
        try {
            return 5;
        } finally {
            continue;
        }
    }
}
assertEq(test3(), undefined);


function test4() {
    L: try {
        return 6;
    } finally {
        break L;
    }
    return;
}
assertEq(test4(), undefined);
