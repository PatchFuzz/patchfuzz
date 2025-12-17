function testProp(propName) {
  newGlobal().evaluate(`
    print(getFuseState().OptimizeRegExpPrototypeFuse.intact, true);
    Object.defineProperty(RegExp.prototype, ${propName}, {enumerable: true});
    print(getFuseState().OptimizeRegExpPrototypeFuse.intact, true);
    Object.defineProperty(RegExp.prototype, ${propName}, {value:null});
    print(getFuseState().OptimizeRegExpPrototypeFuse.intact, false);
  `);
}


testProp(`"flags"`);
testProp(`"global"`);
testProp(`"hasIndices"`);
testProp(`"ignoreCase"`);
testProp(`"multiline"`);
testProp(`"sticky"`);
testProp(`"unicode"`);
testProp(`"unicodeSets"`);
testProp(`"dotAll"`);


testProp(`"exec"`);
testProp(`Symbol.match`);
testProp(`Symbol.matchAll`);
testProp(`Symbol.replace`);
testProp(`Symbol.search`);
testProp(`Symbol.split`);
