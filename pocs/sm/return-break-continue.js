;


function *f1() {
    L: try {
        yield 1;
    } finally {
        break L;
    }
    return 2;
}
it = f1();
print(it, 1);
print(it.return(4), 2, true);
print(it);


function *f2() {
    do try {
        yield 1;
    } catch (e) {
        print(0, 1);
    } finally {
        continue;
    } while (0);
    return 2;
}
it = f2();
print(it, 1);
print(it.return(4), 2, true);
print(it);


function *f3() {
    do try {
        yield 1;
    } catch (e) {
        print(0, 1);
    } finally {
        continue;
    } while (0);
    yield 2;
}
it = f3();
print(it, 1);
print(it.return(4), 2, false);
print(it);


function *f4() {
    var i = 0;
    while (true) {
        try {
            yield i++;
        } finally {
            if (i < 3)
                continue;
        }
    }
}
it = f4();
print(it, 0);
print(it.return(-1), 1, false);
print(it.return(-2), 2, false);
print(it.return(-3), -3, true);
print(it);
