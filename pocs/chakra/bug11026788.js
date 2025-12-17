async function foo( ) {
    var p1 = new Promise(
        timeout1 => {
            setTimeout( () => {
                timeout1( 1 );
            }, 500 );
        }
    );

    var p2 = new Promise(
        timeout2 => {
            setTimeout( () => {
                timeout2( 2 );
            }, 500 );
        }
    );

    return await p1 + await p2;
}

promise = foo();
promise.__proto__.then = (0x41414141 - 8) >> 0;

try {
    promise.then( function( value ){} );
    print("FAILED");
} catch (e) {
    if (e instanceof TypeError) {
        print("PASSED");
    } else {
        print("FAILED");
    }
}