let source = `
  function foo() {
    return "foo";
  }

  
  waitForDelazificationOf(foo);
  print(isDelazificationPopulatedFor(foo), false);
`;

const options = {
    fileName: "inner-03.js",
    lineNumber: 1,
    eagerDelazificationStrategy: "ParseEverythingEagerly",
    newContext: true,
};
evaluate(source, options);
