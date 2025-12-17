var d = 1;
function heavy(x, y) {
    eval(x);
    return function lite() {
        print(d, y);
    };
}

heavy("var d = 100;", 100)();
