


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
    fileName: "inner-02.js",
    lineNumber: 1,
    eagerDelazificationStrategy: "ConcurrentDepthFirst",
    newContext: true,
};
evaluate(source, options);
