let source = `
  function foo() {
    return "foo";
  }

  
  waitForDelazificationOf(foo);
  print(isDelazificationPopulatedFor(foo), false);
`;

const options = {
    fileName: "inner-00.js",
    lineNumber: 1,
    eagerDelazificationStrategy: "OnDemandOnly",
    newContext: true,
};
evaluate(source, options);
