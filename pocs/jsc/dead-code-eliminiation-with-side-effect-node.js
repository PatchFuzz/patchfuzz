function print(b) {
    if (!b)
        throw new Error("bad");
}

let iteration = 1e3


{
    function opt() {
        try {
            1n ** -1n;
        } catch (e) {
            return e
        }
        return 0;
    }

    for (let i = 0; i < iteration; i++)
        print(opt() != 0);
}

{
    function opt(a, b) {
        try {
            a ** b;
        } catch (e) {
            return e
        }
        return 0;
    }

    for (let i = 0; i < iteration; i++)
        print(opt(1n, -1n) != 0);
}

{
    function opt(b) {
        try {
            1n ** b;
        } catch (e) {
            return e
        }
        return 0;
    }

    for (let i = 0; i < iteration; i++)
        print(opt(-1n) != 0);
}


{
    function opt() {
        try {
            0n / 0n;
        } catch (e) {
            return e
        }
        return 0;
    }

    for (let i = 0; i < iteration; i++)
        print(opt() != 0);
}

{
    function opt(a, b) {
        try {
            a / b;
        } catch (e) {
            return e
        }
        return 0;
    }

    for (let i = 0; i < iteration; i++)
        print(opt(0n, 0n) != 0);
}

{
    function opt(b) {
        try {
            0n / b;
        } catch (e) {
            return e
        }
        return 0;
    }

    for (let i = 0; i < iteration; i++)
        print(opt(0n) != 0);
}


{
    function opt() {
        try {
            0n % 0n;
        } catch (e) {
            return e
        }
        return 0;
    }

    for (let i = 0; i < iteration; i++)
        print(opt() != 0);
}

{
    function opt(a, b) {
        try {
            a % b;
        } catch (e) {
            return e
        }
        return 0;
    }

    for (let i = 0; i < iteration; i++)
        print(opt(0n, 0n) != 0);
}

{
    function opt(b) {
        try {
            0n % b;
        } catch (e) {
            return e
        }
        return 0;
    }

    for (let i = 0; i < iteration; i++)
        print(opt(0n) != 0);
}