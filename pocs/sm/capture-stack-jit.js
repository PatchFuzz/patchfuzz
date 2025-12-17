;

if ('captureStackTrace' in Error) {
    function caller(f) {
        return f();
    }


    function fill() {
        let x = {}
        Error.captureStackTrace(x, caller);
        return x;
    }

    let iter = 1500
    for (let i = 0; i < iter; i++) {
        
        caller(fill);
    }


    function test_jit_elision() {
        let x = caller(fill);
        let { stack } = x;
        print(stack);
        print(stack.includes("caller"), false);
        print(stack.includes("fill"), false);
    }

    function test_jit_elision2() {
        ({ stack } = caller(() => {
            let x = caller(fill);
            return x;
        }));
        print(stack.includes("caller"), true); 
        print(stack.includes("fill"), false);
    }

    test_jit_elision();
    test_jit_elision2();
}
