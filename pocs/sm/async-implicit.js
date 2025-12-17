function stackFunctions(stack) {
  const frames = [];
  for (; stack; stack = stack.parent || stack.asyncParent) {
    if (!stack.functionDisplayName) {
      frames.push('(top level)');
    } else if (stack.asyncCause) {
      frames.push(`${stack.asyncCause}*${stack.functionDisplayName}`);
    } else {
      frames.push(stack.functionDisplayName);
    }
  }
  return frames.join(', ');
}

let fakeStack = (function fake1() {
  function fake2() {
    return saveStack();
  }
  return fake2();
})();

function bindAndExpect(options, expected) {
  function bindee() {
    print(stackFunctions(saveStack()), expected);
  }

  return bindToAsyncStack(bindee, options);
}

function caller(f) {
  return f();
}




caller(bindAndExpect({ stack: fakeStack, cause: 'ano', explicit: false },
                     "bindee, caller, (top level)"));

caller(bindAndExpect({ stack: fakeStack, cause: 'hi', explicit: true },
                     "bindee, hi*fake2, fake1, (top level)"));

enqueueJob(bindAndExpect({ stack: fakeStack, cause: 'mita', explicit: false },
                         "bindee, mita*fake2, fake1, (top level)"));

enqueueJob(bindAndExpect({ stack: fakeStack, cause: 'hana', explicit: true },
                         "bindee, hana*fake2, fake1, (top level)"));

