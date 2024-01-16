

ignoreUnhandledRejections();

var v = {}
async function f() {
    
    
              [await v];
             [[await v]];
            [[[await v]]];
           [[[[await v]]]];
          [[[[[await v]]]]];
         [[[[[[await v]]]]]];
        [[[[[[[await v]]]]]]];
       [[[[[[[[await v]]]]]]]];
      [[[[[[[[[await v]]]]]]]]];
     [[[[[[[[[[await v]]]]]]]]]];
}

oomTest(function() {
    for (var i = 0; i < 8; ++i) {
        f();
    }

    
    while (true) {
        try {
            drainJobQueue();
            break;
        } catch {}
    }
});
