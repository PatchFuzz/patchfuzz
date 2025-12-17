function unhandledPromiseRejection1() {
    Promise.resolve(true)
        .then(() => {
            throw new Error('error for unhandledPromiseRejection1')
        });
}
unhandledPromiseRejection1();

function unhandledPromiseRejection2() {
    Promise.resolve(true)
        .then(() => {
            throw new Error('error for unhandledPromiseRejection2');
        })
        .then(() => {
            
        });
}
unhandledPromiseRejection2();

function unhandledPromiseRejection3() {
    let p = Promise.resolve(true)
        .then(() => {
            throw new Error('error for unhandledPromiseRejection3');
        })
        .then(() => 0);
    p.then(() => 0).then(() => 1); 
    p.then(() => 2, (err) => { }); 

}
unhandledPromiseRejection3();

function unhandledPromiseRejection4() {
    let p = Promise.resolve(true)
        .then(() => {
            throw new Error('error for unhandledPromiseRejection3');
        })
        .catch((err) => {
            throw err;
        });
}
unhandledPromiseRejection4();

function handledPromiseRejection5() {
    Promise.resolve(true)
        .then(() => {
            throw new Error('error for handledPromiseRejection5')
        }).catch(() => { });
}
handledPromiseRejection5();

function handledPromiseRejection6() {
    Promise.resolve(true)
        .then(() => {
            throw new Error('error for handledPromiseRejection6');
        })
        .then(() => { }, () => { });
}
handledPromiseRejection6()

function handledPromiseRejection7() {
    let p = Promise.resolve(true)
        .then(() => {
            throw new Error('error for handledPromiseRejection7');
        })
        .then(() => 0);
    p.then(() => 0).then(() => 1).catch(() => { }); 
    p.then(() => 2, (err) => { }); 

}
handledPromiseRejection7();





function unhandledPromiseRejectionCrossContext() { 
    var external = print("JsDiagExceptionsInPromises_BreakOnFirstChanceExceptions.crosscontext.js", "samethread");
    let p = Promise.prototype.then.call(
        external.externalContextPromise.promise, () => { 
    });
    external.externalContextPromise.resolvePromise();
}
unhandledPromiseRejectionCrossContext();





function handledPromiseRejectionCrossContext() { 
    var external = print("JsDiagExceptionsInPromises_BreakOnFirstChanceExceptions.crosscontext.js", "samethread");
    let p = Promise.prototype.then.call(
        external.externalContextPromise.promise, () => {}, () => {}); 
    external.externalContextPromise.resolvePromise();
}
handledPromiseRejectionCrossContext();











function handledPromiseRejection8_bugbug() {
    var p = Promise.resolve(0).then(function onResolve() {
        p.catch(() => { }); 
        throw new Error('error for handledPromiseRejection8_bugbug');
    });
}
handledPromiseRejection8_bugbug();












function handledPromiseRejection9_bugbug() {
    function f1() {
        let promiseA =  new Promise((resolveA, rejectA) => {
            let promiseB = Promise.resolve(true).then(() => {
                throw new Error('error for handledPromiseRejection9_bugbug');
            });
            resolveA(promiseB);
        });
        return promiseA;
    }
        
    f1().catch((e) => {
    });
}
handledPromiseRejection9_bugbug();


function noRejection10() {
    let p = Promise.resolve(true)
        .then(() => {
            try {
                throw new Error('error for noRejection10');
            } catch (err) {
            }
        });
}
noRejection10();
