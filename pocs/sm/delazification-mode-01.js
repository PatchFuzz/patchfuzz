if ('gczeal' in this) {
    gczeal(0);
}

let source = `
  function foo() {
    return "foo";
  }

  waitForDelazificationOf(foo);
  
  print(isDelazificationPopulatedFor(foo), true);
`;

const options = {
    fileName: "inner-01.js",
    lineNumber: 1,
    eagerDelazificationStrategy: "CheckConcurrentWithOnDemand",
    newContext: true,
};
evaluate(source, options);
