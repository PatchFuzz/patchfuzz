let thenCalled = false;
let p1 = new Promise(res => res('result')).then(val => {
    Promise.resolve(1).then(_=>{thenCalled = true;});
    
    drainJobQueue();
    assertEq(thenCalled, false);
});

drainJobQueue();
assertEq(thenCalled, true);
