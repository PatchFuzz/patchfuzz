


if ('gczeal' in this) {
    gczeal(0);
}

let source = `
  function foo() {
    return "foo";
  }

  waitForStencilCache(foo);
  
  assertEq(isInStencilCache(foo), true);
`;

const options = {
    fileName: "inner-01.js",
    lineNumber: 1,
    eagerDelazificationStrategy: "CheckConcurrentWithOnDemand",
    newContext: true,
};
evaluate(source, options);
