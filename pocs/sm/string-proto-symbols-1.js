for (let holder of ["String.prototype", "Object.prototype"]) {
  for (let sym of ["Symbol.match", "Symbol.replace", "Symbol.search", "Symbol.split"]) {
    newGlobal().evaluate(`
      print(getFuseState().OptimizeStringPrototypeSymbolsFuse.intact, true);
      ${holder}[${sym}] = null;
      print(getFuseState().OptimizeStringPrototypeSymbolsFuse.intact, false);
    `);  
  }
}


newGlobal().evaluate(`
  print(getFuseState().OptimizeStringPrototypeSymbolsFuse.intact, true);
  Object.setPrototypeOf(String.prototype, Object.prototype);
  print(getFuseState().OptimizeStringPrototypeSymbolsFuse.intact, true);
  Object.setPrototypeOf(String.prototype, {});
  print(getFuseState().OptimizeStringPrototypeSymbolsFuse.intact, false);
`);
