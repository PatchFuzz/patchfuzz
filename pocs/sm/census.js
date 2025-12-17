const Census = {};

(function () {

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  Census.walkCensus = (subject, name, walker, ignore = new Set()) =>
    walk(subject, name, walker, ignore, 0);

  function walk(subject, name, walker, ignore, count) {
    if (typeof subject === 'object') {
      print(name);
      for (let prop in subject) {
        if (ignore.has(prop)) {
          continue;
        }
        count = walk(subject[prop],
                     name + "[" + JSON.stringify(prop) + "]",
                     walker.enter(prop),
                     ignore,
                     count);
      }
      walker.done(ignore);
    } else {
      print(name + " = " + JSON.stringify(subject));
      walker.check(subject);
      count++;
    }

    return count;
  }

  
  Census.walkAnything = {
    enter: () => Census.walkAnything,
    done: () => undefined,
    check: () => undefined
  };

  
  Census.assertAllZeros = {
    enter: () => Census.assertAllZeros,
    done: () => undefined,
    check: elt => print(elt, 0)
  };

  function expectedObject() {
    throw "Census mismatch: subject has leaf where basis has nested object";
  }

  function expectedLeaf() {
    throw "Census mismatch: subject has nested object where basis has leaf";
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  function makeBasisChecker({compare, missing, extra}) {
    return function makeWalker(basis) {
      if (typeof basis === 'object') {
        var unvisited = new Set(Object.getOwnPropertyNames(basis));
        return {
          enter: prop => {
            unvisited.delete(prop);
            if (prop in basis) {
              return makeWalker(basis[prop]);
            } else {
              return extra(prop);
            }
          },

          done: ignore => [...unvisited].filter(p => !ignore.has(p)).forEach(p => missing(p, basis[p])),
          check: expectedObject
        };
      } else {
        return {
          enter: expectedLeaf,
          done: expectedLeaf,
          check: elt => compare(elt, basis)
        };
      }
    };
  }

  function missingProp(prop) {
    throw "Census mismatch: subject lacks property present in basis: " + JSON.stringify(prop);
  }

  function extraProp(prop) {
    throw "Census mismatch: subject has property not present in basis: " + JSON.stringify(prop);
  }

  
  
  Census.assertAllEqual = makeBasisChecker({
    compare: assertEq,
    missing: missingProp,
    extra: extraProp
  });

  
  
  Census.assertAllNotLessThan = makeBasisChecker({
    compare: (subject, basis) => print(subject >= basis, true),
    missing: missingProp,
    extra: () => Census.walkAnything
  });

  
  
  Census.assertAllNotMoreThan = makeBasisChecker({
    compare: (subject, basis) => print(subject <= basis, true),
    missing: missingProp,
    extra: () => Census.walkAnything
  });

  
  
  Census.assertAllWithin = function (fudge, basis) {
    return makeBasisChecker({
      compare: (subject, basis) => print(Math.abs(subject - basis) <= fudge, true),
      missing: missingProp,
      extra: () => Census.walkAnything
    })(basis);
  }

})();
