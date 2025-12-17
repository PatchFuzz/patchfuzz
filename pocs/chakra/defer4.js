function val() {
    return 1;
}

function testSwitch1() {
    switch (val()) {
    case 1:
        let z = 10; 
        z++;
        break;
    case 2:
        let y = 1; 
        y++;
        break;
    }
}

function testSwitch2() {
    switch (val()) {
    case 1:
        switch (val()) {
        default:
            let a = 1; 
            break;
        }
    }
}

function testSwitch3() {
    var a = 1;
    while (a)
        switch (val()) {
        default:
            let b = 2; 
            ++b;
            a = 0;
            break;
        }
}

testSwitch1();
testSwitch2();
testSwitch3();


(function () { try { eval(
    "switch (Math()) { \
    default: \
        function func4() { \
            switch (--e) { \
            } \
        } \
    }"
); } catch (e) { print(e) }})();

print('Pass');