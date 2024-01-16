



gczeal(0);
gc();




function testAbort(zoneCount, objectCount, sliceBudget, abortState)
{

  var zones = [];
  for (var i = 0; i < zoneCount; i++) {
    var zone = newGlobal({newCompartment: true});
    evaluate("var objects; " +
             "function makeObjectGraph(objectCount) { " +
             "    objects = []; " +
             "    for (var i = 0; i < objectCount; i++) " +
             "        objects.push({i: i}); " +
             "}",
             { global: zone });
    zone.makeObjectGraph(objectCount);
    zones.push(zone);
  }

  gc();

  var didAbort = false;
  startgc(sliceBudget, "shrinking");
  assertEq(currentgc().isShrinking, true);
  while (gcstate() !== "NotActive") {
    if (gcstate() == abortState) {
      abortgc();
      didAbort = true;
      break;
    }

    gcslice(sliceBudget);
  }

  assertEq(gcstate(), "NotActive");
  if (abortState)
    assertEq(didAbort, true);

  return zones;
}

gczeal(0);
testAbort(10, 10000, 10000);
testAbort(10, 10000, 10000, "Mark");
testAbort(10, 10000, 1000, "Sweep");
testAbort(10, 10000, 10000, "Compact");



