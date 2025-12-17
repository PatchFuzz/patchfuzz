function foo() {
    var a = [1, 0, 0, 0, 1, 1, 1, 1, 0, 0];
    var i;
    for (var k = 0; k < 10; k++) {
        switch (a[k]) {
            case 1:
                break;
            case 2:
                {
                    if (i) {
                        function bar() {
                            i;
                        }
                    }
                }
        }
    }
}

foo();

print('pass');