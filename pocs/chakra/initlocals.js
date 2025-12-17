function foo(i) {
    while (true) {
        if (i > 1000 * 1000)
            break;
        if (i == 1) {
            var x = i;
            if (!x.q) ++i;
            x.x;
        }
        i++;
    }
}
foo(1);
print('pass');
