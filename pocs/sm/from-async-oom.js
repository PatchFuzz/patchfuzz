async function* asyncGen(n) {
    for (let i = 0; i < n; i++) {
        yield i * 2;
    }
}

function test() {
    Array.fromAsync(asyncGen(4)).then((x) => {
        print(Array.isArray(x), true);
        print(x.length, 4);
        print(x[0], 0);
        print(x[1], 2);
        print(x[2], 4);
        print(x[3], 6);
        done = true;
    }
    );

    drainJobQueue();
}

ignoreUnhandledRejections();
oomTest(test);

