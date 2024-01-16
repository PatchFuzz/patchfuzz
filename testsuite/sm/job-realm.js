
if (!getBuildConfiguration().debug) {
  quit();
}

function testOne(func) {
  assertEq(debugGetQueuedJobs().length, 0);

  func();

  drainJobQueue();

  assertEq(debugGetQueuedJobs().length, 0);

  if (func.length == 1) {
    func({sameCompartmentAs: globalThis});

    drainJobQueue();

    assertEq(debugGetQueuedJobs().length, 0);
  }
}

function assertGlobal(obj, expectedGlobal) {
  const global = objectGlobal(obj);
  if (global) {
    assertEq(global === expectedGlobal, true);
  } else {
    
    
    assertEq(expectedGlobal !== globalThis, true);
  }
}

testOne(() => {
  
  Promise.resolve(10);
  assertEq(debugGetQueuedJobs().length, 0);
});

testOne(() => {
  
  Promise.resolve(10).then(() => {});
  Promise.resolve(10).then(() => {});
  Promise.resolve(10).then(() => {});

  assertEq(debugGetQueuedJobs().length, 3);
});

testOne(() => {
  
  Promise.resolve(10).then(() => {});

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], globalThis);
});

testOne(newGlobalOptions => {
  
  var g = newGlobal(newGlobalOptions);
  g.eval(`
Promise.resolve(10).then(() => {});
`);

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], g);
});

testOne(newGlobalOptions => {
  
  var g = newGlobal(newGlobalOptions);
  g.Promise.resolve(10).then(g.eval(`() => {}`));

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], g);
});

testOne(newGlobalOptions => {
  
  var g = newGlobal(newGlobalOptions);
  g.Promise.resolve(10).then(() => {});

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], globalThis);
});

testOne(newGlobalOptions => {
  
  var g = newGlobal(newGlobalOptions);
  g.Promise.resolve(10)
    .then(Function.prototype.bind.call(g.eval(`() => {}`), this));

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], g);
});

testOne(newGlobalOptions => {
  
  var g = newGlobal(newGlobalOptions);
  g.Promise.resolve(10)
    .then(g.Function.prototype.bind.call(() => {}, g));

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], globalThis);
});

testOne(newGlobalOptions => {
  
  
  var g = newGlobal(newGlobalOptions);
  g.Promise.resolve(10)
    .then(
      g.Function.prototype.bind.call(
        Function.prototype.bind.call(
          g.Function.prototype.bind.call(
            () => {},
            g),
          this),
        g)
    );

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], globalThis);
});

testOne(newGlobalOptions => {
  
  
  var g = newGlobal(newGlobalOptions);
  Promise.resolve(10)
    .then(
      g.Function.prototype.bind.call(
        Function.prototype.bind.call(
          g.Function.prototype.bind.call(
            Function.prototype.bind.call(
              g.eval(`() => {}`),
              this),
            g),
          this),
        g)
    );

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], g);
});

testOne(newGlobalOptions => {
  
  var g = newGlobal(newGlobalOptions);
  g.handler = () => {};
  g.eval(`
Promise.resolve(10).then(new Proxy(handler, {}));
`);

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], globalThis);
});

testOne(newGlobalOptions => {
  
  var g = newGlobal(newGlobalOptions);
  g.eval(`
var handler = () => {};
`);
  Promise.resolve(10).then(new Proxy(g.handler, {}));

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], g);
});


testOne(newGlobalOptions => {
  
  
  var g = newGlobal(newGlobalOptions);
  g.handler = () => {};
  g.outerProxy = Proxy;
  g.eval(`
Promise.resolve(10).then(
  new outerProxy(new Proxy(new outerProxy(new Proxy(handler, {}), {}), {}), {})
);
`);

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], globalThis);
});

testOne(newGlobalOptions => {
  
  
  var g = newGlobal(newGlobalOptions);
  g.eval(`
var handler = () => {};
`);
  Promise.resolve(10)
    .then(new Proxy(new g.Proxy(new Proxy(g.handler, {}), {}), {}));

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], g);
});

testOne(() => {
  
  Promise.resolve({
    then: () => {}
  });

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], globalThis);
});

testOne(newGlobalOptions => {
  
  var g = newGlobal(newGlobalOptions);
  Promise.resolve(g.eval(`
({
  then: () => {}
});
`));

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], g);
});

testOne(newGlobalOptions => {
  
  var g = newGlobal(newGlobalOptions);
  Promise.resolve({
    then: g.eval(`() => {}`),
  });

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], g);
});

testOne(newGlobalOptions => {
  
  var g = newGlobal(newGlobalOptions);
  Promise.resolve({
    then: Function.prototype.bind.call(g.eval(`() => {}`), this),
  });

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], g);
});

testOne(newGlobalOptions => {
  
  var g = newGlobal(newGlobalOptions);
  Promise.resolve({
    then: g.Function.prototype.bind.call(() => {}, g),
  });

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], globalThis);
});

testOne(newGlobalOptions => {
  
  
  var g = newGlobal(newGlobalOptions);
  Promise.resolve({
    then: Function.prototype.bind.call(
      g.Function.prototype.bind.call(
        Function.prototype.bind.call(
          g.eval(`() => {}`),
          this),
        g),
      this)
  });

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], g);
});

testOne(newGlobalOptions => {
  
  
  var g = newGlobal(newGlobalOptions);
  Promise.resolve({
    then: g.Function.prototype.bind.call(
      Function.prototype.bind.call(
        g.Function.prototype.bind.call(
          () => {},
          g),
        this),
      g),
  });

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], globalThis);
});

testOne(newGlobalOptions => {
  
  var g = newGlobal(newGlobalOptions);
  Promise.resolve({
    then: new Proxy(g.eval(`() => {}`), {}),
  });

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], g);
});

testOne(newGlobalOptions => {
  
  var g = newGlobal(newGlobalOptions);
  Promise.resolve({
    then: new g.Proxy(() => {}, {}),
  });

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], globalThis);
});

testOne(newGlobalOptions => {
  
  
  var g = newGlobal(newGlobalOptions);
  Promise.resolve({
    then: new Proxy(new g.Proxy(new Proxy(g.eval(`() => {}`), {}), {}), {}),
  });

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], g);
});

testOne(newGlobalOptions => {
  
  
  var g = newGlobal(newGlobalOptions);
  Promise.resolve({
    then: new g.Proxy(new Proxy(new g.Proxy(() => {}, {}), {}), {}),
  });

  var jobs = debugGetQueuedJobs();
  assertEq(jobs.length, 1);
  assertGlobal(jobs[0], globalThis);
});

print("ok");
