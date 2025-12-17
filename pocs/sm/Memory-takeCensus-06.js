;
var Pattern = Match.Pattern;

var g = newGlobal({newCompartment: true});
var dbg = new Debugger(g);

Pattern({ count: Pattern.NATURAL,
          bytes: Pattern.NATURAL })
  .print(dbg.memory.takeCensus({ breakdown: { by: 'count' } }));

let census = dbg.memory.takeCensus({ breakdown: { by: 'count', count: false, bytes: false } });
print('count' in census, false);
print('bytes' in census, false);

census = dbg.memory.takeCensus({ breakdown: { by: 'count', count: true,  bytes: false } });
print('count' in census, true);
print('bytes' in census, false);

census = dbg.memory.takeCensus({ breakdown: { by: 'count', count: false, bytes: true } });
print('count' in census, false);
print('bytes' in census, true);

census = dbg.memory.takeCensus({ breakdown: { by: 'count', count: true,  bytes: true } });
print('count' in census, true);
print('bytes' in census, true);





Pattern({
          Function:          { count: Pattern.NATURAL },
          Object:            { count: Pattern.NATURAL },
          DebuggerPrototype: { count: Pattern.NATURAL },
          global:            { count: Pattern.NATURAL },
        })
  .print(dbg.memory.takeCensus({ breakdown: { by: 'objectClass' } }));

Pattern({
          objects:        { count: Pattern.NATURAL },
          scripts:        { count: Pattern.NATURAL },
          strings:        { count: Pattern.NATURAL },
          other:          { count: Pattern.NATURAL }
        })
  .print(dbg.memory.takeCensus({ breakdown: { by: 'coarseType' } }));



Pattern({
          JSString:             { count: Pattern.NATURAL },
          'js::Shape':          { count: Pattern.NATURAL },
          JSObject:             { count: Pattern.NATURAL },
        })
  .print(dbg.memory.takeCensus({ breakdown: { by: 'internalType' } }));




let coarse_type_pattern = {
  objects:        { count: Pattern.NATURAL },
  scripts:        { count: Pattern.NATURAL },
  strings:        { count: Pattern.NATURAL },
  other:          { count: Pattern.NATURAL }
};

Pattern({
          JSString:    coarse_type_pattern,
          'js::Shape': coarse_type_pattern,
          JSObject:    coarse_type_pattern,
        })
  .print(dbg.memory.takeCensus({
    breakdown: { by: 'internalType',
                 then: { by: 'coarseType' }
    }
  }));

Pattern({
          Function:          { count: Pattern.NATURAL },
          Object:            { count: Pattern.NATURAL },
          DebuggerPrototype: { count: Pattern.NATURAL },
          global:            { count: Pattern.NATURAL },
          other:             coarse_type_pattern
        })
  .print(dbg.memory.takeCensus({
    breakdown: {
      by: 'objectClass',
      then:  { by: 'count' },
      other: { by: 'coarseType' }
    }
  }));

Pattern({
          objects: { count: Pattern.NATURAL, label: "object" },
          scripts: { count: Pattern.NATURAL, label: "scripts" },
          strings: { count: Pattern.NATURAL, label: "strings" },
          other:   { count: Pattern.NATURAL, label: "other" }
        })
  .print(dbg.memory.takeCensus({
    breakdown: {
      by: 'coarseType',
      objects: { by: 'count', label: 'object' },
      scripts: { by: 'count', label: 'scripts' },
      strings: { by: 'count', label: 'strings' },
      other:   { by: 'count', label: 'other' }
    }
  }));

try {
  const breakdown = { by: "objectClass" };
  breakdown.then = breakdown;
  dbg.memory.takeCensus({ breakdown });
  print(true, false, "should not reach here");
} catch (e) {
  print(e.message, "takeCensus breakdown 'by' value nested within itself: \"objectClass\"");
}

try {
  const breakdown = { by: "objectClass", then: { by: "objectClass" } };
  dbg.memory.takeCensus({ breakdown });
  print(true, false, "should not reach here");
} catch (e) {
  print(e.message, "takeCensus breakdown 'by' value nested within itself: \"objectClass\"");
}

try {
  const breakdown = { by: "coarseType", scripts: { by: "filename" } };
  breakdown.scripts.noFilename = breakdown;
  dbg.memory.takeCensus({ breakdown });
  print(true, false, "should not reach here");
} catch (e) {
  print(e.message, "takeCensus breakdown 'by' value nested within itself: \"coarseType\"");
}
