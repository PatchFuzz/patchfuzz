let source = `
  function foo() {
    return "foo";
  }

  
  waitForStencilCache(foo);
  assertEq(isInStencilCache(foo), false);
`;

const options = {
    fileName: "inner-03.js",
    lineNumber: 1,
    eagerDelazificationStrategy: "ParseEverythingEagerly",
    newContext: true,
};
evaluate(source, options);
