function test_async_reparenting_with_filter() {
    let obj = {};
    let err = undefined;

    async function caller(callee) {
        return callee();
    }


    async function* a() {
        yield {};
        Error.captureStackTrace(obj, caller)
        err = new Error;
        yield {};
    }

    async function b() {
        return { a: 10 }
    }


    b().then(async () => {
        caller(async () => {
            let g = a();
            await g.next();
            await g.next();
            await g.next();
        })
    }).then(() => {
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        console.log("Capture: ")
        console.log(obj.stack);
        console.log("Stack")
        console.log(err.stack);
        print(obj.stack, "");
        print(err.stack == "", false);
    })
}
test_async_reparenting_with_filter();



function test_async_reparenting_without_filter() {
    let obj = {};
    let err = undefined;

    async function caller(callee) {
        return callee();
    }


    async function* a() {
        yield {};
        Error.captureStackTrace(obj)
        err = new Error;
        yield {};
    }

    async function b() {
        return { a: 10 }
    }


    b().then(async () => {
        caller(async () => {
            let g = a();
            await g.next();
            await g.next();
            await g.next();
        })
    }).then(() => {
        
        
        console.log("Capture: ")
        console.log(obj.stack);
        console.log("Stack")
        console.log(err.stack);
        print(obj.stack.length, err.stack.length);
    })
}
test_async_reparenting_without_filter();
